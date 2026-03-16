export type Lang = 'en' | 'it'

export interface ProjectTranslation {
  readonly id: string
  readonly title: string
  readonly description: string
  readonly imageCount: number
  readonly classic?: boolean
}

export interface Translations {
  readonly nav: {
    readonly about: string
    readonly work: string
    readonly contact: string
  }
  readonly about: {
    readonly intro: string
    readonly experience: string
    readonly closing: string
  }
  readonly contact: {
    readonly email: string
    readonly linkedin: string
    readonly instagram: string
  }
  readonly projects: readonly ProjectTranslation[]
  readonly sound: string
  readonly imageOf: (current: number, total: number) => string
}

export type TranslationsMap = Record<Lang, Translations>
