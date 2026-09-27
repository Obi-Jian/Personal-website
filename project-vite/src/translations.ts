import type { TranslationsMap } from './types'

export const translations: TranslationsMap = {
  en: {
    siteRole: 'Computer science student',
    nav: {
      about:   'About',
      work:    'Skills',
      projects: 'Projects',
      contact: 'Contacts',
      experience: 'Experience',
    },
    about: {
      intro:
        "\nI'm a computer science student at the University of Insubria.\nI graduated with a degree in graphic design and communication in 2023, and immediately enrolled in university, where I discovered my calling.\n\n",
      experience:
        '',
      closing:
        'I\'m looking for an internship where I can turn my theoretical skills into practice :)',
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
        description: 'This is the language I know best: OOP, concurrency, thread management, distributed programming. We used Java to understand concepts, algorithms and data structures.',
        imageCount: 0,
      },
      {
        id: 'proj2',
        title: 'Python',
        description: 'We used python to study statistics, regressions, classifiers, clusters, etc... during "Big Data", and "Human-machine interactions" courses. On my github you can find the codes of the exercises and the final projects of both. I also used many cryptography, exploiting, and web scraping tools during my experience at CyberChallenge. Libraries used: numpy, sklearn, scipy, pandas and pyTorch, scapy, PyCryptodome, Pwntools.',
        imageCount: 0,
        classic: true,
      },
      {
        id: 'proj3',
        title: 'Rust',
        description: '"The Rust Programming Language" is a must-read. I did it, also following various tutorials on YouTube, and created a small project that can be viewed in the Projects section :D',
        imageCount: 0,
        classic: true,
      },
      {
        id: 'proj4',
        title: 'Web Development',
        description: 'This site is written with TS, HTML and CSS. In the web development course we studied many tools for fullstack development, starting with HTML/CSS and Bootstrap, then moving on to JS and Node. On my GitHub profile I forked the web group project we worked on in our second year, which I recently revised.',
        imageCount: 0,
      },
      {
        id: 'proj5',
        title: 'Databases',
        description: 'Relationships, tables, ER schemas, queries: the database course taught me the \"basics.\" I\'m primarily familiar with MySQL, but I\'ve also used PostgreSQL and non-relational databases such as Firebase and MongoDB.',
        imageCount: 0,
      },
    ],
    selectedProjects: [
      {
        id: 'projRustDaw',
        title: 'Rust Mini DAW',
        tech: 'Rust · cpal · fundsp · egui',
        description: 'A lightweight Digital Audio Workstation built from scratch in Rust. It can mix WAV tracks, add filters, make simple synth with oscillators and comprends a 32-step drum machine with global BPM control.',
        imageCount: 3,
        fit: 'contain',
        images: ['/images/rust_tracks.mp4', '/images/rust_drum.mp4', '/images/rust_synth.mp4'],
        links: [{ label: 'GitHub', url: 'https://github.com/Obi-Jian/Rust-Mini-DAW' }],
      },
      {
        id: 'projEda',
        title: 'Stress Classification from EDA',
        tech: 'Python · scipy · scikit-learn · pandas',
        description: 'A from-scratch reproduction of a scientific paper\'s pipeline for binary stress/baseline classification from the electrodermal activity (EDA) signal, applied to the public WESAD dataset.',
        imageCount: 3,
        fit: 'contain',
        images: ['/images/eda_comparison.png', '/images/eda_confusion.png', '/images/eda_importance.png'],
        links: [{ label: 'GitHub', url: 'https://github.com/Obi-Jian/EDA-Stress-Classification-WESAD' }],
      },
    ],
    experience: {
      projects: [
        /* {
          id: 'exp1',
          title: 'IsyPatient',
          description: 'What do I work on? The product is a management software for doctors and patients, available on web, iOS and Android, written with TypeScript on React Native. My role is primarily front-end focused, but I also work on back-end tasks and cloud functions.',
          imageCount: 0,   
        }, */
        {
          id: 'exp2',
          title: 'CyberChallenge',
          description: 'Cyberchallenge is a national security training program. The entire course focused on exercises in cryptography, web/software/network security, with the aim of bringing the best students from the institute to the national competition. It was the most formative experience of my studies and ended positively, earning me the opportunity to represent my university in the final competition.',
          imageCount: 2,  
          images: ['/images/img0.JPG', '/images/img1.jpg'], 
        },
        /* {
          id: 'exp3',
          title: 'Highschool internship',
          description: 'My first real contact with work was in an industrial stationery shop. Here I supported my colleagues in using the offset printing machines and during the production processes.',
          imageCount: 0,
        }, */
      ],
  },
  },

  it: {
    siteRole: 'Studente di informatica',
    nav: {
      about:   'Chi sono',
      work:    'Competenze',
      projects: 'Progetti',
      contact: 'Contatti',
      experience: 'Esperienza',
    },
    about: {
      intro:
        "\nSono uno studente all'ultimo anno di informatica presso l\'Università degli studi dell\'Insubria.\nDiplomato in grafica e comunicazione nel 2023, mi sono subito iscritto all'università e ho scoperto la mia strada.\n\n",
      experience:
        '',
      closing:
        'Sono alla ricerca di un tirocinio che mi permetta di tradurre in pratica le mie competenze teoriche :)',
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
        description: 'Questo è il linguaggio che conosco di più: OOP, concorrenza, gestione dei threads, programmazione distribuita. Abbiamo usato Java per comprendere concetti, algoritmi e strutture dati.',
        imageCount: 0,
      },
      {
        id: 'proj2',
        title: 'Python',
        description: 'Abbiamo usato python per studiare statistica, regressioni, classificatori, clusters, ecc... durante il corso di "Big Data", e "Interazioni uomo-macchina". Sul mio github, linkato nella sezione contatti, si possono trovare i codici degli esercizi e dei progetti finali di entrambi. Inoltre ho usato molti tool di crittografia, exploiting e scraping web durante la mia esperienza a CyberChallenge. Librerie utilizzate: numpy, sklearn, scipy, pandas e pyTorch, scapy, PyCryptodome, Pwntools.',
        imageCount: 0,
        classic: true,
      },
      {
        id: 'proj3',
        title: 'Rust',
        description: '\"The Rust Programming Language\" è una lettura obbligata. L\'ho fatto, seguendo anche vari tutorial su YouTube e ho creato un piccolo progetto visualizzabile nella sezione Progetti :D',
        imageCount: 0,
        classic: true,
      },
      {
        id: 'proj4',
        title: 'Sviluppo Web',
        description: 'Questo sito è scritto con TS, HTML e CSS. Nel corso di sviluppo web abbiamo studiato molti tool per sviluppo fullstack, partendo da HTML/CSS, bootstrap, fino ad arrivare a JS e node. Nel profilo github ho forkato il progetto web svolto in gruppo al secondo anno, rivisitato da me recentemente.',
        imageCount: 0,
      },
      {
        id: 'proj5',
        title: 'Databases',
        description: "Relazioni, tabelle, schemi ER, query: il corso di database mi ha insegnato le \"basi\" delle basi dati. Conosco principalmente MySQL, ma ho usato anche PostgreSQL e non-relazionali come Firebase e mongoDB.",
        imageCount: 0,
      },
    ],
    selectedProjects: [
      {
        id: 'projRustDaw',
        title: 'Rust Mini DAW',
        tech: 'Rust · cpal · fundsp · egui',
        description: 'Una Digital Audio Workstation leggera, scritta da zero in Rust. Può mixare tracce WAV, aggiungere filtri, creare synth semplici con oscillatori e comprende una drum machine a 32 step con controllo globale del BPM.',
        imageCount: 3,
        fit: 'contain',
        images: ['/images/rust_tracks.mp4', '/images/rust_drum.mp4', '/images/rust_synth.mp4'],
        links: [{ label: 'GitHub', url: 'https://github.com/Obi-Jian/Rust-Mini-DAW' }],
      },
      {
        id: 'projEda',
        title: 'Classificazione dello stress da EDA',
        tech: 'Python · scipy · scikit-learn · pandas',
        description: 'Una riproduzione scritta da zero di un paper scientifico per la classificazione binaria stress/baseline dal segnale di attività elettrodermica (EDA), applicata al dataset pubblico WESAD.',
        imageCount: 3,
        fit: 'contain',
        images: ['/images/eda_comparison.png', '/images/eda_confusion.png', '/images/eda_importance.png'],
        links: [{ label: 'GitHub', url: 'https://github.com/Obi-Jian/EDA-Stress-Classification-WESAD' }],
      },
    ],
    experience: {
      projects: [
        /* {
          id: 'Lavoro 1',
          title: 'IsyPatient',
          description: 'Su cosa lavoro? Il prodotto è un gestionale per medici e pazienti disponibile su web, iOS e Android, scritto in TypeScript con React Native. Il mio ruolo attualmente si concentra sul front-end, ma svolgo anche task di back-end e cloud functions.',
          imageCount: 0,   
        }, */
        {
          id: 'CyberChallenge',
          title: 'CyberChallenge',
          description: 'CyberChallenge è un programma nazionale di addestramento nell\'ambito della sicurezza. Tutto il corso si è svolto attorno a esercizi di crittografia e sicurezza web/software/network, con lo scopo di portare i migliori dell\'istituto alla gara nazionale. È stata l\'esperienza più formativa del mio percorso di studi e si è conclusa positivamente, guadagnandomi la possibilità di rappresentare la mia università alla competizione finale.',
          imageCount: 2,
          images: ['/images/img0.JPG', '/images/img1.jpg'],
        },
        /* {
          id: 'Stage scuole superiori',
          title: 'Grafica Piera',
          description: 'Il mio primo vero contatto con il mondo del lavoro è stato in una cartoleria industriale. Qui affiancavo i miei colleghi nell\'utilizzo dei macchinari di stampa offset e durante i processi produttivi.',
          imageCount: 0,
        }, */
      ],
    },
  },
}



