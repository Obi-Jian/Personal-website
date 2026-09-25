import './style.css'
import { translations } from './translations'
import type { Lang, ProjectTranslation } from './types'

// ─── State ────────────────────────────────────────────────────────────────────

let currentLang: Lang = (localStorage.getItem('lang') as Lang | null) ?? 'en'
const imageIndexes: Record<string, number> = {}

// Deep-link mapping: panel id ↔ url hash slug
const HASH_BY_PANEL: Record<string, string> = {
  aboutPanel:      'about',
  workPanel:       'work',
  projectsPanel:   'projects',
  experiencePanel: 'experience',
  contactPanel:    'contact',
}
const PANEL_BY_HASH: Record<string, string> = {
  about:      'aboutPanel',
  work:       'workPanel',
  projects:   'projectsPanel',
  experience: 'experiencePanel',
  contact:    'contactPanel',
}

// ─── DOM helpers ──────────────────────────────────────────────────────────────

function qs<T extends Element>(sel: string, root: Element | Document = document): T {
  const el = root.querySelector<T>(sel)
  if (!el) throw new Error(`Element not found: ${sel}`)
  return el
}

function qsAll<T extends Element>(sel: string, root: Element | Document = document): T[] {
  return Array.from(root.querySelectorAll<T>(sel))
}

const prefersReducedMotion = (): boolean =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

// ─── Expandable panels ────────────────────────────────────────────────────────
// Height animation is pure CSS (grid-template-rows 0fr↔1fr, keyed on `.open`), so
// there is no measured pixel height that can go stale and clip the content below
// — the open panel is always exactly `auto` tall. JS only toggles the class/ARIA.

function openPanel(panelEl: HTMLElement): void {
  panelEl.classList.add('open')
  qs<HTMLElement>('.expandablePanelTrigger', panelEl).setAttribute('aria-expanded', 'true')
}

function closePanel(panelEl: HTMLElement): void {
  panelEl.classList.remove('open')
  qs<HTMLElement>('.expandablePanelTrigger', panelEl).setAttribute('aria-expanded', 'false')
}

function closeAllPanels(): void {
  qsAll<HTMLElement>('.expandablePanel.open').forEach(closePanel)
}

function setHash(panelId: string | null): void {
  const slug = panelId ? HASH_BY_PANEL[panelId] : undefined
  const url = slug ? `#${slug}` : `${location.pathname}${location.search}`
  history.replaceState(null, '', url)
}

// The element that actually scrolls: html/body height + overflow rules make the
// <body> the scroller here, not the window/documentElement.
function scrollerEl(): HTMLElement {
  const de = document.documentElement
  return de.scrollHeight > de.clientHeight + 1 ? de : document.body
}

// Scroll so `panel`'s title sits at the top — starting immediately (no wait) and
// re-reading the target/limit each frame, so it "follows" the panel as it expands
// instead of waiting for the animation to finish. This removes the perceived
// delay. Offset comes from the CSS `scroll-margin-top` on `.expandablePanel`.
function scrollPanelToTop(panel: HTMLElement): void {
  const el     = scrollerEl()
  const offset = parseFloat(getComputedStyle(panel).scrollMarginTop) || 0
  const start  = el.scrollTop
  const t0      = performance.now()
  const dur    = prefersReducedMotion() ? 0 : 380
  const easeOut = (x: number): number => 1 - Math.pow(1 - x, 3)

  const step = (now: number): void => {
    const p       = dur ? Math.min(1, (now - t0) / dur) : 1
    const wantDoc = panel.getBoundingClientRect().top + el.scrollTop - offset
    const maxTop  = el.scrollHeight - el.clientHeight
    const target  = Math.max(0, Math.min(wantDoc, maxTop))
    el.scrollTop  = start + (target - start) * easeOut(p)
    if (p < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

function togglePanel(panelId: string): void {
  const panel = document.getElementById(panelId)
  if (!panel) return

  if (panel.classList.contains('open')) {
    closeAllPanels()
    document.body.classList.remove('openPanel')
    setHash(null)
    return
  }

  closeAllPanels()
  openPanel(panel)
  document.body.classList.add('openPanel')
  setHash(panelId)
  scrollPanelToTop(panel)
}

function initPanels(): void {
  qsAll<HTMLElement>('.expandablePanelTrigger').forEach(trigger => {
    trigger.addEventListener('click', (e: Event) => {
      e.preventDefault()
      const panelId = trigger.dataset['panel']
      if (panelId) togglePanel(panelId)
    })
  })

  // Open from a deep link (e.g. /#about) on load, and react to back/forward.
  const openFromHash = (): void => {
    const slug = location.hash.replace('#', '')
    const panelId = PANEL_BY_HASH[slug]
    if (!panelId) return
    const panel = document.getElementById(panelId)
    if (!panel || panel.classList.contains('open')) return
    closeAllPanels()
    openPanel(panel)
    document.body.classList.add('openPanel')
    scrollPanelToTop(panel)
  }
  openFromHash()
  window.addEventListener('hashchange', openFromHash)
}

// ─── Image cycling ────────────────────────────────────────────────────────────

function showImage(projectId: string, index: number): void {
  const project = document.getElementById(projectId)
  if (!project) return
  const images  = qsAll<Element>('.image', project)
  const countEl = project.querySelector<HTMLElement>('span.imageCount')
  images.forEach((img, i) => {
    const on = i === index
    img.classList.toggle('showing', on)
    if (img instanceof HTMLVideoElement) {
      if (on) void img.play().catch(() => {})  // Low Power Mode → stays on poster
      else img.pause()
    }
  })
  const t = translations[currentLang]
  if (countEl && images.length > 1) {
    countEl.textContent = t.imageOf(index + 1, images.length)
  }
}

// Start the first clip of every project (and leave the rest paused).
function initProjectVideos(): void {
  qsAll<HTMLElement>('.projectImages').forEach(container => {
    qsAll<HTMLVideoElement>('video.image', container).forEach(v => {
      if (v.classList.contains('showing')) void v.play().catch(() => {})
    })
  })
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

function buildProjectHTML(p: ProjectTranslation): string {
  const multiClass   = p.imageCount > 1 ? ' multipleImages' : ''
  const classicClass = p.classic ? ' classic' : ''

  const previewHTML = p.imageCount > 0 ? `
      <div class="projectPreview">
        <div class="projectImages">
          ${p.imageCount > 1 ? `
          <div class="imageContainerTriggerHolder">
            <div class="imageContainerTrigger" data-project="${p.id}" data-dir="1" role="button" tabindex="0" aria-label="Next image"></div>
          </div>` : ''}
          ${buildImagesHTML(p)}
        </div>
      </div>
      ${p.imageCount > 1 ? `<span class="imageCount">${translations[currentLang].imageOf(1, p.imageCount)}</span>` : ''}`
  : ''

  const techHTML  = p.tech ? `<p class="projectTech">${p.tech}</p>` : ''

  // The title itself is the link to the project (e.g. its GitHub repo).
  const href = p.links?.[0]?.url
  const titleHTML = href
    ? `<a class="projectTitle projectTitleLink" href="${href}" target="_blank" rel="noopener">${p.title}</a>`
    : `<span class="projectTitle">${p.title}</span>`

  return `
    <div class="project${multiClass}${classicClass}" id="${p.id}">
      ${titleHTML}
      ${techHTML}
      <p class="projectDescription">${p.description}</p>
      ${previewHTML}
    </div>`
}

function buildImagesHTML(p: ProjectTranslation): string {
  const sources = p.images ?? []
  const fitClass = p.fit === 'contain' ? ' image--contain' : ''
  return sources.map((src, i) => {
    const cls = `image${i === 0 ? ' showing' : ''}${fitClass}`
    // Motion media is served as <video>, not GIF: iOS won't animate large GIFs
    // (huge decoded-frame budget) but plays H.264 fine. `poster` shows the first
    // frame when autoplay is unavailable (e.g. iOS Low Power Mode). JS controls
    // play/pause per visible clip, so no `autoplay` attribute is needed.
    if (/\.(mp4|webm)$/i.test(src)) {
      const poster = src.replace(/\.(mp4|webm)$/i, '.jpg')
      return `<video class="${cls}" src="${src}" poster="${poster}" muted loop playsinline preload="metadata" aria-label="${p.title}"></video>`
    }
    return `<img class="${cls}" src="${src}" alt="${p.title}" loading="lazy" decoding="async" />`
  }).join('\n')
}

// ─── Apply translations ───────────────────────────────────────────────────────

function applyTranslations(lang: Lang): void {
  const t = translations[lang]

  // nav
  const navAbout      = document.querySelector<HTMLElement>('[data-panel="aboutPanel"]')
  const navWork       = document.querySelector<HTMLElement>('[data-panel="workPanel"]')
  const navProjects   = document.querySelector<HTMLElement>('[data-panel="projectsPanel"]')
  const navContact    = document.querySelector<HTMLElement>('[data-panel="contactPanel"]')
  const navExperience = document.querySelector<HTMLElement>('[data-panel="experiencePanel"]')

  if (navAbout)      navAbout.textContent      = t.nav.about
  if (navWork)       navWork.textContent       = t.nav.work
  if (navProjects)   navProjects.textContent   = t.nav.projects
  if (navContact)    navContact.textContent    = t.nav.contact
  if (navExperience) navExperience.textContent = t.nav.experience

  // about
  const aboutContent = document.getElementById('aboutSectionContent')
  if (aboutContent) {
    aboutContent.innerHTML = `
      <p style="white-space: pre-line">${t.about.intro}</p>
      <!-- <p>${t.about.experience}</p>
      <p>${t.about.closing}</p> -->`
  }

  // contact
  const contactLinks = document.getElementById('contactLinks')
  if (contactLinks) {
    contactLinks.innerHTML = `
      <a href="mailto:cuboids.plectra_3g@icloud.com" class="contactLink">${t.contact.email}</a><br>
      <a href="https://linkedin.com/in/gianluca-colombo-milano" class="contactLink" target="_blank" rel="noopener">${t.contact.linkedin}</a><br>
      <a href="https://github.com/Obi-Jian" class="contactLink" target="_blank" rel="noopener">${t.contact.github}</a>`
  }

  // projects — renderizza PRIMA di initImageCycling
  const projectsEl = document.getElementById('projects')
  if (projectsEl) {
    projectsEl.innerHTML = t.projects.map(buildProjectHTML).join('\n')
  }

  const selectedProjectsEl = document.getElementById('selectedProjects')
  if (selectedProjectsEl) {
    selectedProjectsEl.innerHTML = t.selectedProjects.map(buildProjectHTML).join('\n')
  }

  const experienceEl = document.getElementById('experience')
  if (experienceEl) {
    experienceEl.innerHTML = t.experience.projects.map(buildProjectHTML).join('\n')
  }

  // reset indexes
  t.projects.forEach(p => { imageIndexes[p.id] = 0 })
  t.selectedProjects.forEach(p => { imageIndexes[p.id] = 0 })
  t.experience.projects.forEach(p => { imageIndexes[p.id] = 0 })

  // init cycling UNA VOLTA SOLA dopo che tutto il DOM è pronto
  initImageCycling()
  initProjectVideos()

  // lang buttons
  document.querySelectorAll<HTMLElement>('.langBtn').forEach(btn => {
    const active = btn.dataset['lang'] === lang
    btn.classList.toggle('langBtn--active', active)
    btn.setAttribute('aria-pressed', String(active))
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
      // Open panels reflow automatically (grid `1fr` = content height).
    })
  })
}

// ─── Keyboard support for image cycling (role="button" divs) ──────────────────

function initKeyboard(): void {
  document.addEventListener('keydown', (e: KeyboardEvent) => {
    const target = e.target as HTMLElement | null
    if (!target || !target.classList.contains('imageContainerTrigger')) return
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      target.click()
    }
  })
}

// ─── Video background with static fallback ────────────────────────────────────
// If autoplay is blocked (Safari Low Power Mode, iOS energy saving, reduced
// motion…) we hide the <video> entirely and reveal a static image layer
// (#bgFallback) via `body.videoFallback`. Hiding the video avoids the native
// play-button overlay Safari draws over a paused video.

function useStaticBackground(): void {
  document.body.classList.add('videoFallback')
}

function initVideo(): void {
  const video = document.getElementById('bgVideo') as HTMLVideoElement | null
  if (!video) return

  if (prefersReducedMotion()) {
    video.pause()
    useStaticBackground()
    return
  }

  video.play().catch(useStaticBackground)  // autoplay blocked → static image
}

// ─── Bootstrap ────────────────────────────────────────────────────────────────

function init(): void {
  initVideo()
  applyTranslations(currentLang)
  initPanels()
  initLangSwitcher()
  initKeyboard()

  document.documentElement.classList.remove('unloaded')
  requestAnimationFrame(() => document.body.classList.add('loaded'))
}

init()
