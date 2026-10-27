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

The Projects section features Place Your Order, OpenTrace, OpsPilot, and the Hate Speech Detector, with case studies based on their public repositories.

## Contact form

Email and phone links work directly. The message form remains disabled until a Web3Forms access key is configured.

For local development, set `VITE_WEB3FORMS_ACCESS_KEY` in an ignored `.env.local` file. The public form key is included in the browser bundle, so use the provider’s public key and spam controls.

## GitHub Pages

The `Jithendra-coder.github.io` repository deploys automatically on pushes to `main` and supports manual runs from the Actions tab. The production domain is [jithendra.me](https://jithendra.me/). The repository variable `SITE_URL` is set to `https://jithendra.me` so the site builds at the domain root and generates matching canonical metadata.

GitHub Pages must use **GitHub Actions** as its publishing source. For an apex custom domain, DNS should point `jithendra.me` to GitHub Pages using its four A records (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, and `185.199.111.153`). If you also configure `www.jithendra.me`, its CNAME must point directly to `Jithendra-coder.github.io`.

To enable the message form, add the Web3Forms public access key as the repository Actions secret `WEB3FORMS_ACCESS_KEY`. Publishing does not depend on this secret; without it, the form stays disabled while the direct email and phone links remain available.
