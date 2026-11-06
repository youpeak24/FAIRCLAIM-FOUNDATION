# FAIRCLAIM FOUNDATION Website

Official informational website for **FAIRCLAIM FOUNDATION**, engineered and designed by **Legendary One Technologies**.

The website is a fast, responsive, accessible, static web application built to communicate the foundation's purpose, guiding principles, mission, vision, proposed initiatives, and civic engagement dialogues.

---

## 1. Technology Stack

- **React 19**
- **Vite 8**
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- **React Router v7** (`react-router-dom`)
- **TypeScript** with strict type safety
- **Lucide React** (icons)
- **Newsreader** and **Plus Jakarta Sans**, self-hosted via Fontsource (no third-party font requests)

---

## 2. Getting started

```bash
npm install
npm run dev       # local development
npm run build     # type-check and production build into dist/
npm run lint      # oxlint
npm run preview   # serve the production build
```

## 3. Where things live

| What | Where |
| --- | --- |
| Design tokens (palette, fonts, type scale, motion) | `src/index.css` (`@theme` and component classes) |
| Organization facts, mission/vision, principles, FAQ | `src/data/organization.ts` |
| The four proposed focus areas | `src/data/initiatives.ts` |
| Navigation and per-page titles/descriptions | `src/data/navigation.ts`, `src/data/pageMeta.ts` |
| Contact form integration | `src/services/contact.ts` |
| Brand assets | `public/brand/`, `public/favicon.png` |
| Motion (reveals, parallax, scroll/focus after navigation) | `src/components/PageEffects.tsx` |

Content rules: every focus area is **proposed**; do not describe it as operating. Contact details, social profiles, registration status and similar facts are only rendered once filled in `organization.ts`.

## 4. Contact form

Set `VITE_CONTACT_FORM_ENDPOINT` (see `.env.example`) to an HTTPS endpoint (Formspree, Basin, Web3Forms, or a custom webhook) **at build time**. The form posts JSON `{ fullName, email, areaOfInterest, organization, message, submittedAt }` and shows success only after a 2xx response. With no endpoint set, the form shows a visitor-friendly "not available yet" notice and the submit button is disabled.

## 5. Logo

`public/brand/fairclaim-emblem.png` (2x master) and `fairclaim-emblem-sm.png` were prepared from the supplied emblem image: cropped to the seal, white point levelled so the paper tone matches pure white, and the background outside the seal made transparent. Interior whites are preserved. **Replace these files with the original high-resolution logo when available**, keeping the filenames. Always show the emblem on a white surface.

## 6. SEO

Production host: **https://www.fairclaimfoundation.org** (the bare domain redirects to `www` in the Vercel domain settings). To change it, edit `SITE_URL` in `src/lib/seo.ts`: sitemap, robots.txt, llms.txt, canonicals and JSON-LD all derive from it.

- `npm run build` type-checks, builds the client, builds a server entry (`src/entry-server.tsx`) and runs `scripts/prerender.mjs`, which writes real HTML for every route (`dist/about/index.html`, ...), a `404.html`, and `sitemap.xml`. The browser then hydrates that HTML.
- **To add a page:** add the route in `src/App.tsx` and an entry in `src/data/pageMeta.ts` (title, description, schema type, sitemap hints). The sitemap, canonical, Open Graph tags and breadcrumbs follow automatically.
- `src/lib/seo.ts` builds each page's head: title, description, canonical, robots, Open Graph, Twitter card, hreflang and JSON-LD (Organization, WebSite, page type, BreadcrumbList; FAQPage on the home page; ItemList on Initiatives). Email, phone, address and social profiles are added to the Organization schema only once filled in `organization.ts`.
- `sitemap.xml`, `robots.txt` and `llms.txt` are generated into `dist/` at build time (`lastmod` comes from git history). Static: `public/og-image.png` (1200x630) and `site.webmanifest`.
- Titles should stay under about 60 characters and descriptions under about 160.

## 7. Deployment

`vercel.json` enables clean URLs (no trailing slash), security headers (HSTS, CSP, etc.) and long-lived caching for hashed assets. There is deliberately **no** catch-all rewrite to `index.html`: unknown URLs get the real `404.html` with a 404 status instead of a soft 404. `public/_redirects` carries the bare-domain to `www` redirect for Netlify-style hosts.
