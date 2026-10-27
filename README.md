# Jithendra’s Portfolio

A responsive portfolio built with React, TypeScript, and Vite.

## Run locally

Use Node.js 20.19 or newer, then run:

```sh
npm ci
npm run dev
```

Create a production build with `npm run build`. This runs TypeScript checking before Vite packages the static site.

## Update the content

Edit the typed data in `src/content.ts`:

- `profile` controls the introduction, contact links, portrait, and social profiles.
- `journey` supplies the About timeline.
- `projects` supplies project cards and hash-based case studies.
- `skillGroups` supplies the Technical Skills categories.
- `experience` supplies the Experience section.

The kiosk and online-ordering platform is marked as in development. Add more project details when they are ready.

## Contact form

Email and phone links work directly. The message form remains disabled until a Web3Forms access key is configured.

For local development, set `VITE_WEB3FORMS_ACCESS_KEY` in an ignored `.env.local` file. The public form key is included in the browser bundle, so use the provider’s public key and spam controls.
