import './style.css'
import { translations } from './translations'
import type { Lang, ProjectTranslation } from './types'

// ─── State ────────────────────────────────────────────────────────────────────

let currentLang: Lang = (localStorage.getItem('lang') as Lang | null) ?? 'en'
const imageIndexes: Record<string, number> = {}

// ─── DOM helpers ──────────────────────────────────────────────────────────────

function qs<T extends Element>(sel: string, root: Element | Document = document): T {
  const el = root.querySelector<T>(sel)
  if (!el) throw new Error(`Element not found: ${sel}`)
  return el
}

function qsAll<T extends Element>(sel: string, root: Element | Document = document): T[] {
  return Array.from(root.querySelectorAll<T>(sel))
}

// ─── Expandable panels ────────────────────────────────────────────────────────

function openPanel(panelEl: HTMLElement): void {
  const container = qs<HTMLElement>('.expandablePanelContentContainer', panelEl)
  const content   = qs<HTMLElement>('.expandablePanelContent', panelEl)
  panelEl.classList.add('open')
  container.style.height = 'auto'
  const h = container.scrollHeight
  container.style.height = '0'
  requestAnimationFrame(() => {
    container.style.transition = 'height .4s ease'
    container.style.height = `${h}px`
    content.style.transition  = 'opacity .4s .1s'
    content.style.opacity = '1'
  })
}

function closePanel(panelEl: HTMLElement): void {
  const container = qs<HTMLElement>('.expandablePanelContentContainer', panelEl)
  const content   = qs<HTMLElement>('.expandablePanelContent', panelEl)
  panelEl.classList.remove('open')
  container.style.transition = 'height .4s ease'
  container.style.height = '0'
  content.style.transition = 'opacity .4s'
  content.style.opacity = '0'
}

function closeAllPanels(): void {
  qsAll<HTMLElement>('.expandablePanel.open').forEach(closePanel)
}

function initPanels(): void {
  qsAll<HTMLElement>('.expandablePanelTrigger').forEach(trigger => {
    trigger.addEventListener('click', (e: Event) => {
      e.preventDefault()
      const panelId = (trigger as HTMLElement).dataset['panel']
      if (!panelId) return
      const panel = document.getElementById(panelId)
      if (!panel) return
      const isOpen = panel.classList.contains('open')
      closeAllPanels()
      if (!isOpen) {
        openPanel(panel)
        document.body.classList.add('openPanel')
      } else {
        document.body.classList.remove('openPanel')
      }
    })
  })
}

// ─── Image cycling ────────────────────────────────────────────────────────────

function showImage(projectId: string, index: number): void {
  const project = document.getElementById(projectId)
  if (!project) return
  const images  = qsAll<Element>('.image', project)
  const countEl = project.querySelector<HTMLElement>('span.imageCount')
  images.forEach((img, i) => img.classList.toggle('showing', i === index))
  const t = translations[currentLang]
  if (countEl && images.length > 1) {
    countEl.textContent = t.imageOf(index + 1, images.length)
  }
}

function initImageCycling(): void {
  qsAll<HTMLElement>('.imageContainerTrigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const projectId = trigger.dataset['project']
      const dir = parseInt(trigger.dataset['dir'] ?? '1', 10)
      if (!projectId) return
      const project = document.getElementById(projectId)
      if (!project) return
      const images = qsAll('.image', project)
      if (!images.length) return
      imageIndexes[projectId] = ((imageIndexes[projectId] ?? 0) + dir + images.length) % images.length
      showImage(projectId, imageIndexes[projectId])
    })
  })
}

// ─── Project builder ──────────────────────────────────────────────────────────

/* function buildProjectHTML(p: ProjectTranslation): string {
  const multiClass   = p.imageCount > 1 ? ' multipleImages' : ''
  const classicClass = p.classic ? ' classic' : ''
  const countHTML    = p.imageCount > 1
    ? `<span class="imageCount">${translations[currentLang].imageOf(1, p.imageCount)}</span>`
    : ''

  const palette = ['#FF5A5F', '#2a2a2a', '#4285F4', '#e63329', '#0071e3', '#5f5fc4']
  const imagesHTML = Array.from({ length: p.imageCount }).map((_, i) => {
    const showClass = i === 0 ? ' showing' : ''
    const bg    = palette[(parseInt(p.id.replace('proj', '')) - 1 + i) % palette.length]
    const label = p.title.split('—')[1]?.trim() ?? p.title
    return `<svg class="image${showClass}" viewBox="0 0 1600 900" xmlns="http://www.w3.org/2000/svg">
        <rect width="1600" height="900" fill="${bg}"/>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
          fill="white" font-size="80" font-family="helvetica" letter-spacing="-2">${label}</text>
      </svg>`
  }).join('\n')

  const triggersHTML = p.imageCount > 1 ? `
      <div class="imageContainerTriggerHolder">
        <div class="imageContainerTrigger" data-project="${p.id}" data-dir="-1"></div>
        <div class="imageContainerTrigger" data-project="${p.id}" data-dir="1"></div>
      </div>` : ''

  return `
    <div class="project${multiClass}${classicClass}" id="${p.id}">
      <a class="projectTitle" href="#">${p.title}</a>
      <p class="projectDescription">${p.description}</p>
      <div class="projectPreview">
        <div class="projectImages">
          ${triggersHTML}
          ${imagesHTML}
        </div>
      </div>
      ${countHTML}
    </div>`
} */

function buildProjectHTML(p: ProjectTranslation): string {
  const multiClass   = p.imageCount > 1 ? ' multipleImages' : ''
  const classicClass = p.classic ? ' classic' : ''

  // immagini e counter solo se imageCount > 0
  const previewHTML = p.imageCount > 0 ? `
      <div class="projectPreview">
        <div class="projectImages">
          ${p.imageCount > 1 ? `
          <div class="imageContainerTriggerHolder">
            <div class="imageContainerTrigger" data-project="${p.id}" data-dir="-1"></div>
            <div class="imageContainerTrigger" data-project="${p.id}" data-dir="1"></div>
          </div>` : ''}
          ${buildImagesHTML(p)}
        </div>
      </div>
      ${p.imageCount > 1 ? `<span class="imageCount">${translations[currentLang].imageOf(1, p.imageCount)}</span>` : ''}` 
  : ''

  return `
    <div class="project${multiClass}${classicClass}" id="${p.id}">
      <a class="projectTitle" href="#">${p.title}</a>
      <p class="projectDescription">${p.description}</p>
      ${previewHTML}
    </div>`
}

function buildImagesHTML(p: ProjectTranslation): string {
  const palette = ['#FF5A5F', '#2a2a2a', '#4285F4', '#e63329', '#0071e3', '#5f5fc4']
  return Array.from({ length: p.imageCount }).map((_, i) => {
    const showClass = i === 0 ? ' showing' : ''
    const bg    = palette[(parseInt(p.id.replace('proj', '')) - 1 + i) % palette.length]
    const label = p.title.split('—')[1]?.trim() ?? p.title
    return `<svg class="image${showClass}" viewBox="0 0 1600 900" xmlns="http://www.w3.org/2000/svg">
        <rect width="1600" height="900" fill="${bg}"/>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
          fill="white" font-size="80" font-family="helvetica" letter-spacing="-2">${label}</text>
      </svg>`
  }).join('\n')
}

// ─── Apply translations ───────────────────────────────────────────────────────

function applyTranslations(lang: Lang): void {
  const t = translations[lang]

  const navAbout   = document.querySelector<HTMLElement>('[data-panel="aboutPanel"]')
  const navWork    = document.querySelector<HTMLElement>('[data-panel="workPanel"]')
  const navContact = document.querySelector<HTMLElement>('[data-panel="contactPanel"]')
  const navExperience  = document.querySelector<HTMLElement>('[data-panel="experiencePanel"]')
  const experienceEl = document.getElementById('experience')

  if (navExperience) navExperience.textContent = t.nav.experience
  if (experienceEl)  experienceEl.innerHTML    = t.experience.projects.map(buildProjectHTML).join('\n')
  if (navAbout)   navAbout.textContent   = t.nav.about
  if (navWork)    navWork.textContent    = t.nav.work
  if (navContact) navContact.textContent = t.nav.contact

  initImageCycling()
  t.experience.projects.forEach(p => { imageIndexes[p.id] = 0 })

  const aboutContent = document.getElementById('aboutSectionContent')
  if (aboutContent) {
    aboutContent.innerHTML = `
      <div>
        <p style="white-space: pre-line">${t.about.intro}</p>
        <p>${t.about.experience}</p>
        <p>${t.about.closing}</p>
      </div>`
  }

  const contactLinks = document.getElementById('contactLinks')
  if (contactLinks) {
    contactLinks.innerHTML = `
      <a href="mailto:cuboids.plectra_3g@icloud.com" class="contactLink">${t.contact.email}</a><br>
      <a href="https://github.com/Obi-Jian" class="contactLink">${t.contact.linkedin, "LinkedIn not available now"}</a><br>
      <a href="https://github.com/Obi-Jian" class="contactLink">${t.contact.github}</a>`
  }

/*   const soundEl = document.getElementById('soundController')
  if (soundEl) soundEl.textContent = t.sound */

  const projectsEl = document.getElementById('projects')
  if (projectsEl) {
    projectsEl.innerHTML = t.projects.map(buildProjectHTML).join('\n')
  }

  initImageCycling()
  t.projects.forEach(p => { imageIndexes[p.id] = 0 })

  document.querySelectorAll<HTMLElement>('.langBtn').forEach(btn => {
    btn.classList.toggle('langBtn--active', btn.dataset['lang'] === lang)
  })

  document.documentElement.lang = lang
}

// ─── Lang switcher ────────────────────────────────────────────────────────────

function initLangSwitcher(): void {
  document.querySelectorAll<HTMLElement>('.langBtn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset['lang'] as Lang | undefined
      if (!lang || lang === currentLang) return
      currentLang = lang
      localStorage.setItem('lang', lang)
      applyTranslations(lang)
      qsAll<HTMLElement>('.expandablePanel.open').forEach(panel => {
        const container = qs<HTMLElement>('.expandablePanelContentContainer', panel)
        container.style.height = 'auto'
        const h = container.scrollHeight
        container.style.height = `${h}px`
      })
    })
  })
}

// ─── Bootstrap ────────────────────────────────────────────────────────────────

function init(): void {
  applyTranslations(currentLang)
  initPanels()
  initLangSwitcher()

  document.documentElement.classList.remove('unloaded')
  setTimeout(() => document.body.classList.add('loaded'), 50)
}

init()
