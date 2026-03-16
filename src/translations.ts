import type { TranslationsMap } from './types'

export const translations: TranslationsMap = {
  en: {
    nav: {
      about:   'About',
      work:    'Selected Work',
      contact: 'Contact',
    },
    about: {
      intro:
        "I'm a multidisciplinary designer and art director currently based in San Francisco. My experience includes in-house and agency teams with work ranging from marketing, visual, brand, editorial, and environmental design.",
      experience:
        'Previously I have worked with folks at <a href="#">Airbnb</a>, <a href="#">Apple</a>, <a href="#">Google</a>, <a href="#">IDEO</a>, <a href="#">Figma</a>, and interned at <a href="#">Pentagram</a> and <a href="#">2x4</a>. I studied architecture at <a href="#">Yale</a> and <a href="#">Princeton</a> and run a <a href="#">Sea Ranch stay</a> that is a design-focused retreat experience.',
      closing:
        'Please reach out for opportunities, collaborations, and thanks for stopping by.',
    },
    contact: {
      email:     'Email',
      linkedin:  'LinkedIn',
      instagram: 'Instagram',
    },
    sound: 'Sound',
    imageOf: (current, total) => `${current} / ${total}`,
    projects: [
      {
        id: 'proj1',
        title: 'Brand Identity — Airbnb',
        description:
          'Visual identity and brand system for a global hospitality platform, spanning digital, environmental, and print touchpoints.',
        imageCount: 3,
      },
      {
        id: 'proj2',
        title: 'Editorial Design — Apple',
        description:
          'Campaign and editorial direction for product launches, retail activations, and digital marketing materials.',
        imageCount: 2,
        classic: true,
      },
      {
        id: 'proj3',
        title: 'Environmental Design — Google',
        description:
          'Wayfinding, signage systems, and spatial branding for campus environments and event spaces.',
        imageCount: 1,
      },
      {
        id: 'proj4',
        title: 'Design Strategy — IDEO',
        description:
          'Human-centered design research and visual systems for healthcare and consumer experience projects.',
        imageCount: 2,
      },
    ],
  },

  it: {
    nav: {
      about:   'Chi sono',
      work:    'Lavori selezionati',
      contact: 'Contatti',
    },
    about: {
      intro:
        'Sono un designer e art director multidisciplinare con base a San Francisco. La mia esperienza spazia tra team interni e agenzie, con lavori che vanno dal marketing al design visivo, di brand, editoriale e ambientale.',
      experience:
        'In precedenza ho collaborato con <a href="#">Airbnb</a>, <a href="#">Apple</a>, <a href="#">Google</a>, <a href="#">IDEO</a>, <a href="#">Figma</a>, e ho svolto tirocini presso <a href="#">Pentagram</a> e <a href="#">2x4</a>. Ho studiato architettura a <a href="#">Yale</a> e <a href="#">Princeton</a> e gestisco un <a href="#">soggiorno al Sea Ranch</a>, un\'esperienza di ritiro incentrata sul design.',
      closing:
        'Contattami per opportunità, collaborazioni — grazie per essere passato.',
    },
    contact: {
      email:     'Email',
      linkedin:  'LinkedIn',
      instagram: 'Instagram',
    },
    sound: 'Suono',
    imageOf: (current, total) => `${current} / ${total}`,
    projects: [
      {
        id: 'proj1',
        title: 'Identità di brand — Airbnb',
        description:
          'Sistema di identità visiva per una piattaforma di ospitalità globale, che copre touchpoint digitali, ambientali e di stampa.',
        imageCount: 3,
      },
      {
        id: 'proj2',
        title: 'Design editoriale — Apple',
        description:
          'Direzione creativa e campagne per lanci di prodotto, attivazioni retail e materiali di marketing digitale.',
        imageCount: 2,
        classic: true,
      },
      {
        id: 'proj3',
        title: 'Design ambientale — Google',
        description:
          'Wayfinding, sistemi di segnaletica e branding spaziale per campus e spazi eventi.',
        imageCount: 1,
      },
      {
        id: 'proj4',
        title: 'Strategia di design — IDEO',
        description:
          'Ricerca di design centrata sull\'utente e sistemi visivi per progetti nel settore sanitario e dell\'esperienza consumer.',
        imageCount: 2,
      },
    ],
  },
}
