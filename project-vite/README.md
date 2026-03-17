# Gianluca Colombo — Portfolio

## Struttura del progetto

```
index.html              ← entry point (solo markup, zero JS inline)
src/
  main.ts               ← logica: cursor, panel, i18n, image cycling
  translations.ts       ← tutti i testi EN + IT
  types.ts              ← interfacce TypeScript
  style.css             ← tutti gli stili
```

## Come modificare i contenuti

| Cosa vuoi cambiare         | File                   |
|----------------------------|------------------------|
| Testi, titoli progetti     | `src/translations.ts`  |
| Font, colori, spaziature   | `src/style.css`        |
| Titolo principale          | `index.html`           |
| Logica / comportamento     | `src/main.ts`          |

## Setup locale

```bash
cd project-vite
npm install
npm run dev       # → http://localhost:5173 con hot reload
```

## Deploy su Vercel

### Metodo consigliato — GitHub + Vercel (automatico)

1. Crea un repo su GitHub e fai push del progetto
   ```bash
   git init
   git add .
   git commit -m "init"
   git remote add origin https://github.com/TUO-USERNAME/jose-meza-portfolio.git
   git push -u origin main
   ```

2. Vai su [vercel.com](https://vercel.com) → "Add New Project"

3. Importa il tuo repo GitHub

4. Vercel rileva Vite automaticamente — le impostazioni sono già corrette:
   - **Framework**: Vite
   - **Build command**: `npm run build`
   - **Output directory**: `dist`

5. Clicca "Deploy" — il sito è online in ~30 secondi

### Da quel momento in poi

```
git add .
git commit -m "aggiorno bio"
git push
```
→ Vercel rebuilda e pubblica automaticamente. Zero configurazione.

### Metodo alternativo — deploy manuale senza GitHub

```bash
npm install -g vercel
npm run build
vercel deploy --prod
```

## Aggiungere un progetto

In `src/translations.ts`, aggiungi un oggetto nell'array `projects` sia per `en` che per `it`:

```typescript
{
  id: 'proj5',                    // deve essere unico
  title: 'Titolo — Cliente',
  description: 'Descrizione...',
  imageCount: 2,                  // numero di immagini
  classic: true,                  // opzionale: aspect ratio 3/2 invece di 16/9
}
```

## Cambiare font

In `src/style.css`, modifica i token:

```css
:root {
  --font: 'Il Tuo Font', helvetica, sans-serif;
}
```

E aggiorna il `@import` di Google Fonts in cima al file.
