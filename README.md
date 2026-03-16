# Personal Website

Personal portfolio and presentation site built with Vite and TypeScript.

Live at: `https://gian-portfolio-gold-eight-61.vercel.app/`

---

## Stack

- **Vite** — bundler e dev server
- **TypeScript** — tipizzazione statica
- **CSS** — nessun framework, tutto vanilla
- **Vercel** — hosting e deploy automatico

---

## Struttura

```
index.html              — entry point, solo markup
src/
  main.ts               — logica: pannelli, i18n, cursore, immagini
  translations.ts       — tutti i testi in EN e IT
  types.ts              — interfacce TypeScript
  style.css             — tutti gli stili
public/
  video/                — video di sfondo
```

---

## Runnare in locale

```bash
npm install
npm run dev
```

Il sito sarà disponibile su `http://localhost:5173`.

```bash
npm run build     # build di produzione in /dist
npm run preview   # preview della build in locale
```

---

## Deploy

Il sito si deploya automaticamente su Vercel ad ogni push su `main`.
