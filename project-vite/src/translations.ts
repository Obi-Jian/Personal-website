import type { TranslationsMap } from './types'

export const translations: TranslationsMap = {
  en: {
    nav: {
      about:   'About',
      work:    'Skills',
      contact: 'Contact',
      experience: 'Experience',
    },
    about: {
      intro:
        "I'm a computer science student based in Milan, Italy.",
      experience:
        '...',
      closing:
        '...',
    },
    contact: {
      email:     'Email',
      linkedin:  'LinkedIn',
      github: 'GitHub',
    },
    /* sound:   'Sound', */
    imageOf: (current, total) => `${current} / ${total}`,
    projects: [
      {
        id: 'proj1',
        title: 'Java',
        description: 'This is the language i know the best. OOP, concurrency, thread management, distributed programming. We used this language to understand concepts, algorithms and data structures.',
        imageCount: 0,
      },
      {
        id: 'proj2',
        title: 'Python',
        description: 'You always need high-level programming skills. This is the fastest language i know, many libraries, infinite possibilities. We studied statystic concepts like Combinatorial calculus, regressions, clusters and data analysis in the "Big Data" course, that i very much enjoyed. You can check out my course final project on my github page, linked in the contact section. I used lots of cryptography, exploiting, but also web scraping tools during my experience at the CyberChallenge course, such as scapy, PyCyptodome, Pwntools',
        imageCount: 0,
        classic: true,
      },
      {
        id: 'proj3',
        title: 'JS/TS, React Native, HTML/CSS',
        description: '...',
        imageCount: 0,
      },
      {
        id: 'proj4',
        title: 'Databases',
        description: '...',
        imageCount: 0,
      },
    ],
    experience: {              
      projects: [
        {
          id: 'exp1',
          title: 'Job 1',
          description: 'Description of the project...',
          imageCount: 0,   
        },
        {
          id: 'exp2',
          title: 'CyberChallenge',
          description: 'Description of the project...',
          imageCount: 0,   
        },
        {
          id: 'exp3',
          title: 'Highshcool internship',
          description: 'Description of the project...',
          imageCount: 0,
        },
      ],
  },
  },

  it: {
    nav: {
      about:   'Chi sono',
      work:    'Skills',
      contact: 'Contatti',
      experience: 'Esperienza',
    },
    about: {
      intro:
        "Sono uno studente di informatica presso l\'Università degli studi dell\'Insubria. ",
      experience:
        'Al momento lavoro part time come sviluppatore mobile e web, con React Native e scrivendo principalmente in Typescript',
      closing:
        'Sono alla ricerca di un tirocinio che possa traddure le mie capacità teoriche in pratica :)',
    },
    contact: {
      email:     'Email',
      linkedin:  'LinkedIn',
      github: 'GitHub',
    },
    /* sound:   'Suono', */
    imageOf: (current, total) => `${current} / ${total}`,
    projects: [
      {
        id: 'proj1',
        title: 'Java',
        description: '...',
        imageCount: 3,
      },
      {
        id: 'proj2',
        title: 'Python',
        description: 'Direzione creativa e campagne per lanci di prodotto, attivazioni retail e materiali di marketing digitale.',
        imageCount: 2,
        classic: true,
      },
      {
        id: 'proj3',
        title: 'JS/TS, React Native, HTML/CSS',
        description: '...',
        imageCount: 1,
      },
      {
        id: 'proj4',
        title: 'Databases',
        description: "...",
        imageCount: 2,
      },
    ],
    experience: {               
      projects: [
        {
          id: 'Lavoro 1',
          title: 'Project With Photo — Client',
          description: 'Description of the project...',
          imageCount: 0,   
        },
        {
          id: 'CyberChallenge',
          title: 'Project No Photo — Client',
          description: 'Description of the project...',
          imageCount: 0,
        },
        {
          id: 'Stage scuole superiori',
          title: 'Project No Photo — Client',
          description: 'Description of the project...',
          imageCount: 0,
        },
      ],
    },
  },
}
