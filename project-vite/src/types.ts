export type Lang = 'en' | 'it'

export interface ProjectLink {
  readonly label: string
  readonly url:   string
}

export interface ProjectTranslation {
  readonly id: string
  readonly title: string
  readonly description: string
  readonly imageCount: number
  readonly classic?: boolean
  readonly images?:     readonly string[]
  readonly tech?:       string
  readonly links?:      readonly ProjectLink[]
  /** 'contain' letterboxes media (charts, UI recordings) instead of cropping */
  readonly fit?:        'cover' | 'contain'
}

export interface Translations {
  readonly nav: {
    readonly about:   string
    readonly work:    string
    readonly projects: string
    readonly contact: string
    readonly experience: string

  }
  readonly about: {
    readonly intro:      string
    readonly experience: string
    readonly closing:    string
  }
  readonly contact: {
    readonly email:     string
    readonly linkedin:  string
    readonly github: string
  }
  readonly experience: {         
    readonly projects: readonly ProjectTranslation[]
  }
  readonly projects:  readonly ProjectTranslation[]
  readonly selectedProjects: readonly ProjectTranslation[]
  /* readonly sound:     string */
  readonly imageOf:   (current: number, total: number) => string
}

export type TranslationsMap = Record<Lang, Translations>
