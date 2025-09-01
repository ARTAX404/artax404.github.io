# ARTAX404 – Portfolio (Next.js + TypeScript + Tailwind + PWA)

Modern portfolio for ARTAX404 featuring App Router, Markdown content, PWA and CI (Lighthouse).

## Quick start

```bash
cd site
npm ci
npm run dev
```

- Local: http://localhost:3000
- Build: `npm run build` then `npm start`

## Content editing

- Projects live in `content/projects/*.md` with frontmatter:

```md
---
title: "My Project"
date: "2024-10-15"
 tags: ["Next.js", "PWA"]
excerpt: "Short summary."
cover: "/logo.png"
---

Description in Markdown.
```

- Home lists projects automatically. Detail pages at `/projets/[slug]`.

## Assets

- Logo: `public/logo.png` (reused from repo root `Logo_ARTAX.png`)
- PWA icons generated to `public/icons/*` (maskable & apple-touch included)
- CV: `public/cv.pdf` (replace with your PDF)
- Zoho verify copied to `public/zohoverify/verifyforzoho.html`

## SEO & PWA

- Metadata configured in `src/app/layout.tsx`
- Manifest at `src/app/manifest.webmanifest`
- JSON-LD `Person` schema in `src/lib/schema.ts` with client component `JsonLd`

## Accessibility

- Semantics, focus styles, good contrast; aim for WCAG AA

## CI / Lighthouse

- GitHub Action `.github/workflows/ci.yml` builds the app and runs Lighthouse CI
- Report is attached to PR as artifact (`lighthouse-report`)

## Deployment

- Recommended: Vercel. Set project root to `site/`. Build command `npm run build`, output `.next`.
- GitHub Pages (optional): keep `CNAME` at repo root. If switching to Vercel custom domain, add the domain in Vercel and keep DNS in sync. Do not delete `CNAME` without confirming migration.

## Editing checklist

- Update text in `src/app/page.tsx`
- Add/edit projects in `content/projects/`
- Replace `public/cv.pdf`
- Verify social links (YouTube, GitHub) on the home page
- Check PWA installability and icons

## Commit convention

- `feat(ui): ...`, `feat(pwa): ...`, `ci: ...`, `docs: ...`, `chore: ...`