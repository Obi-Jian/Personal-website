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
        "I'm a computer science student at the University of Insubria.\nI graduated with a degree in graphic design and communication in 2023, and immediately enrolled in university, where I discovered my true calling.",
      experience:
        'I\'m currently working part-time as a mobile and web developer in a tech startup.',
      closing:
        'I\'m looking for an internship where i translate my theoretical skills into practice :)',
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
        description: 'This is the language i know the best: OOP, concurrency, thread management, distributed programming. We used Java to understand concepts, algorithms and data structures.',
        imageCount: 0,
      },
      {
        id: 'proj2',
        title: 'Python',
        description: 'We used Python to study statistics, combinatorics, regression, clustering, and data analysis during the "Big Data" course. The final project can be found on my GitHub, linked in the contact section. I used many cryptography, exploiting, and web scraping tools during my experience at the CyberChallenge, such as scapy, PyCryptodome, Pwntools, and many others.',
        imageCount: 0,
        classic: true,
      },
      {
        id: 'proj3',
        title: 'Web Developement',
        description: 'This site is written with TS, HTMLS and CSS. In the web development course we studied many tools for fullstack developement, starting with HTML/CSS, bootstrap and moving on to JS and Node. In my GitHub profile, I forked the web group project we worked on in our second year, which I recently revised.',
        imageCount: 0,
      },
      {
        id: 'proj4',
        title: 'Databases',
        description: 'Relationships, tables, ER schemas, queries: the database course taught me the \"basics.\" I\'m primarily familiar with MySQL, but I\'ve also used PostgreSQL and non-relational databases such as Firebase and MongoDB.',
        imageCount: 0,
      },
    ],
    experience: {              
      projects: [
        {
          id: 'exp1',
          title: 'IsyPatient',
          description: 'What do i work on? The product is a management software for doctors and patients, available on web, iOS and Android, written with TypeScript on React Native. My role is primarely front-end focused, but I also work on back-end tasks and on cloud functions.',
          imageCount: 0,   
        },
        {
          id: 'exp2',
          title: 'CyberChallenge',
          description: 'Cyberchallenge is a national security training program. The entire course focused on exercises in cryptography, web/software/network security, with the aim of bringing the best students from the institute to the national competition. It was the most formative experience of my studies and ended positively, earning me the opportunity to represent my university in the final competition. The competition consists of a 6-hour CTF in which the final score is calculated based on stolen and lost flags, the ability to keep services online, and other factors such as exploit time or the ability to find the flags first.',
          imageCount: 2,  
          images: ['/images/img0.JPG', '/images/img1.jpg'], 
        },
        {
          id: 'exp3',
          title: 'Highshcool internship',
          description: 'My first real contact with work was in an industrial stationery shop. Here I supported my colleagues in using the offset printing machines and during the production processes.',
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
        "Sono uno studente all'ultimo anno di informatica presso l\'Università degli studi dell\'Insubria.\nDiplomato in grafica e comunicazione nel 2023, mi sono subito iscritto all'università e ho scoperto la mia vera strada.",
      experience:
        'Al momento lavoro part time come sviluppatore mobile e web in una startup tech.',
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
        description: 'Questo è il linguaggio che conosco di più: OOP, concorrenza, gestione dei threads, programmazione distribuita. Abbiamo usato Java per comprendere concetti, algoritmi e strutture dati',
        imageCount: 0,
      },
      {
        id: 'proj2',
        title: 'Python',
        description: 'Abbiamo usato python per studiare statistica, calcolo combinatorio, regressioni, clusters e analisi dati durante il corso di "Big Data". Sul mio github, linkato nella sezione contatti, si può trovare il progetto finale. Ho usato molti tool di crittografia, exploiting, ma anche scraping web durante la mia esperienza alla CyberChallenge, come scapy, PyCryptodome, Pwntools e molti altri.',
        imageCount: 0,
        classic: true,
      },
      {
        id: 'proj3',
        title: 'Sviluppo Web',
        description: 'Questo sito è scritto con TS, HTML e CSS. Nel corso di sviluppo web abbiamo studiato molti tool per sviluppo fullstack, partendo da HTML/CSS, bootstrap, fino ad arrivare a JS e node. Nel profilo github ho forkato il progetto web svolto in gruppo al secondo anno, rivisitato da me recentemente.',
        imageCount: 0,
      },
      {
        id: 'proj4',
        title: 'Databases',
        description: "Relazioni, tabelle, schemi ER, query: il corso di database mi ha insegnato le \"basi\" delle basi. Conosco principalmente MySQL, ma ho usato anche PostgreSQL e non-relazionali come Firebase e mongoDB.",
        imageCount: 0,
      },
    ],
    experience: {               
      projects: [
        {
          id: 'Lavoro 1',
          title: 'IsyPatient',
          description: 'Su cosa lavoro? Il prodotto è un gestionale per medici e pazienti disponibile su web, iOS e android, scritto in TypeScript con React Native. Il mio ruolo attualmente si concentra sul front-end, ma ho svolgo anche task di back-end e su cloud functions.',
          imageCount: 0,   
        },
        {
          id: 'CyberChallenge',
          title: 'CyberChallenge',
          description: 'Cyberchallenge é un programma nazionale di addestramento nell’ambito della sicurezza. Tutto il corso si è svolto attorno a esercizi riguardo crittografia, sicurezza web/software/netowrk, con lo scopo di portare i migliori dell\'istituto alla gara nazionale. È sata l\'esperienza più formativa del mio percorso di studi e si è conclusa positivamente, guadagnandomi la possibilità di rappresentare la mia università alla competizione finale. La gara consiste in una CTF di 6 ore in cui il punteggio finale è calcolato in base alle flag rubate e perse, alla capacità di mantenere online i servizi e altri fattori come tempo di exploit o l\'abilità di trovare prima degli altri le flags.',
          imageCount: 2,
          images: ['/images/img0.JPG', '/images/img1.jpg'],
        },
        {
          id: 'Stage scuole superiori',
          title: 'Grafica Piera',
          description: 'Il mio primo vero contatto con il mondo del lavoro è stato in una cartoleria industrialie. Qui ho affiancavo i miei colleghi nell\’utilizzo dei macchinari di stampa OFFSET e durante i processi produttivi.',
          imageCount: 0,
        },
      ],
    },
  },
}



