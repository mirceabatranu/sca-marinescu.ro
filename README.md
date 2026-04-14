# sca-marinescu.ro

Static Astro website for Societatea Civila de Avocatura Marinescu, designed for fast crawlability, strong technical SEO, and bilingual Romanian/English presentation.

## Commands

- `npm install`
- `npm run dev`
- `npm run check`
- `npm run build`
- `npm run preview`

## Production structure

- `/` Romanian homepage
- `/en/` English homepage
- `/sitemap.xml` hand-authored XML route
- `/robots.txt` crawl directives route
- `/demo/*` non-indexed design previews

## Firebase Hosting

The project includes a `firebase.json` configured to serve the generated `dist` directory.

Typical deployment flow:

1. `npm install`
2. `npm run build`
3. `firebase deploy --only hosting`

Project selection is intentionally left to the Firebase CLI environment so the same repository can be reused across staging and production projects.
