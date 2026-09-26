import type { TranslationsMap } from './types'

export const translations: TranslationsMap = {
  en: {
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
        description: 'We used Python to study statistics, combinatorics, regression, clustering, and data analysis during the "Big Data" course. The final project can be found on my GitHub, linked in the contact section. I used many cryptography, exploiting, and web scraping tools during my experience at the CyberChallenge, such as scapy, PyCryptodome, Pwntools, and many others.',
        imageCount: 0,
        classic: true,
      },
      {
        id: 'proj3',
        title: 'Web Development',
        description: 'This site is written with TS, HTML and CSS. In the web development course we studied many tools for fullstack development, starting with HTML/CSS and Bootstrap, then moving on to JS and Node. On my GitHub profile I forked the web group project we worked on in our second year, which I recently revised.',
        imageCount: 0,
      },
      {
        id: 'proj4',
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
        description: 'A lightweight Digital Audio Workstation built from scratch in Rust to put theory into practice after studying the language and audio sampling at university. It mixes multiple WAV tracks with per-track filters (low/high/band-pass and notch), synth tracks with oscillators and a step sequencer, and a 32-step drum machine with global BPM control.',
        imageCount: 3,
        fit: 'contain',
        images: ['/images/rust_tracks.mp4', '/images/rust_drum.mp4', '/images/rust_synth.mp4'],
        links: [{ label: 'GitHub', url: 'https://github.com/Obi-Jian/Rust-Mini-DAW' }],
      },
      {
        id: 'projEda',
        title: 'Stress Classification from EDA',
        tech: 'Python · scipy · scikit-learn · pandas',
        description: 'An individual, from-scratch reproduction of the Zangróniz et al. (2017) pipeline for binary stress/baseline classification from the electrodermal activity (EDA) signal, applied to the public WESAD dataset. Full pipeline: digital filtering, tonic/phasic (SCL/SCR) decomposition, 22 features, several classifiers and Leave-One-Subject-Out validation. Best model: a linear SVM at 86% accuracy, with a detailed comparison against the original paper.',
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
          description: 'Cyberchallenge is a national security training program. The entire course focused on exercises in cryptography, web/software/network security, with the aim of bringing the best students from the institute to the national competition. It was the most formative experience of my studies and ended positively, earning me the opportunity to represent my university in the final competition. The competition consists of a 6-hour CTF in which the final score is calculated based on stolen and lost flags, the ability to keep services online, and other factors such as exploit time or the ability to find the flags first.',
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
    nav: {
      about:   'Chi sono',
      work:    'Skills',
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
    selectedProjects: [
      {
        id: 'projRustDaw',
        title: 'Rust Mini DAW',
        tech: 'Rust · cpal · fundsp · egui',
        description: 'Una Digital Audio Workstation leggera, scritta da zero in Rust per mettere in pratica la teoria dopo aver studiato il linguaggio e il campionamento audio all\'università. Mixa più tracce WAV con filtri per traccia (passa-basso/alto/banda e notch), tracce synth con oscillatori e step sequencer, e una drum machine a 32 step con controllo globale del BPM.',
        imageCount: 3,
        fit: 'contain',
        images: ['/images/rust_tracks.mp4', '/images/rust_drum.mp4', '/images/rust_synth.mp4'],
        links: [{ label: 'GitHub', url: 'https://github.com/Obi-Jian/Rust-Mini-DAW' }],
      },
      {
        id: 'projEda',
        title: 'Classificazione dello stress da EDA',
        tech: 'Python · scipy · scikit-learn · pandas',
        description: 'Riproduzione individuale, riscritta da zero, della pipeline di Zangróniz et al. (2017) per la classificazione binaria stress/baseline dal segnale di attività elettrodermica (EDA), applicata al dataset pubblico WESAD. Pipeline completa: filtraggio digitale, decomposizione tonica/fasica (SCL/SCR), 22 feature, più classificatori e validazione Leave-One-Subject-Out. Modello migliore: una SVM lineare all\'86% di accuratezza, con un confronto dettagliato rispetto al paper originale.',
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
          description: 'CyberChallenge è un programma nazionale di addestramento nell\'ambito della sicurezza. Tutto il corso si è svolto attorno a esercizi di crittografia e sicurezza web/software/network, con lo scopo di portare i migliori dell\'istituto alla gara nazionale. È stata l\'esperienza più formativa del mio percorso di studi e si è conclusa positivamente, guadagnandomi la possibilità di rappresentare la mia università alla competizione finale. La gara consiste in una CTF di 6 ore in cui il punteggio finale è calcolato in base alle flag rubate e perse, alla capacità di mantenere online i servizi e ad altri fattori come il tempo di exploit o l\'abilità di trovare le flag prima degli altri.',
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



