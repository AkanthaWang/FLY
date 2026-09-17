# Fly to the Moon Piano & Music Studio

A polished, single-page studio website built with Astro, TypeScript, Tailwind CSS, and a small React booking form. The structure follows the supplied layout brief: hero, Meet Anna, lessons, studio, teaching philosophy, FAQ, student stories, and a trial-lesson CTA.

## Stack

- Astro for fast static HTML and page structure
- TypeScript for safer component code
- Tailwind CSS for responsive styling
- React only where interaction is useful (`BookingForm.tsx`)
- GitHub Pages for hosting
- GitHub Actions for automatic build and deployment

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:4321` after the dev server starts.

Before committing, run:

```bash
npm run build
```

## Publish to GitHub Pages

1. Create an empty GitHub repository, for example `fly-to-the-moon-studio`.
2. Push this project to the repository's `main` branch:

```bash
git init
git add .
git commit -m "Build Fly to the Moon studio site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/fly-to-the-moon-studio.git
git push -u origin main
```

3. In GitHub, open **Settings → Pages** and set **Source** to **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` will build and publish the site after each push to `main`.

The Astro config automatically uses the repository name as the GitHub Pages base path, so project sites such as `https://YOUR_USERNAME.github.io/fly-to-the-moon-studio/` work without extra edits.

## Booking form

The current static form validates the fields in the browser and opens an email draft addressed to `hello@flytothemoon.studio`. For production, replace this behavior in `src/components/BookingForm.tsx` with one of:

- a Calendly link for scheduling;
- a Formspree/Getform endpoint;
- a serverless endpoint that sends notifications and stores inquiries.

Do not place email-service API keys in browser code.

## Content and image notes

The page uses remote Unsplash image URLs as visual placeholders. Replace them with the studio's own optimized WebP or AVIF photography before launch. Update the alt text and SEO description when final images and service-area details are confirmed.
