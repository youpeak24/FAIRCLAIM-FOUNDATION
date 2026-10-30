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
- **Lucide React** (featherlight accessible SVG icons)

---

## 2. Getting Started

### Prerequisites

- **Node.js**: v18.0.0 or later (Node v24+ recommended)
- **npm**: v9.0.0 or later

### Installation

Clone or extract the repository, navigate to the project root directory, and install dependencies:

```bash
npm install
```

### Local Development

Start the local Vite development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your web browser.

### Production Build & Verification

Compile the TypeScript code and bundle production-optimized static assets:

```bash
npm run build
```

The production output is generated in the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

### Code Quality & Linting

Run Oxlint to verify code quality and adherence to best practices:

```bash
npm run lint
```

---

## 3. Project Structure

```
├── .env.example              # Example environment configuration for contact endpoint
├── index.html                # HTML entrypoint with Newsreader & Plus Jakarta Sans fonts
├── package.json              # Project dependencies and build scripts
├── vite.config.ts            # Vite configuration with React and Tailwind CSS v4 plugins
├── src/
│   ├── main.tsx              # React entrypoint
│   ├── App.tsx               # Route definitions and BrowserRouter
│   ├── index.css             # Theme custom properties, tokens, and font setup
│   ├── data/
│   │   ├── organization.ts   # Centralized organization data, principles, and objectives
│   │   ├── navigation.ts     # Navigation links and footer routes
│   │   └── initiatives.ts    # Proposed focus areas, gallery items, and video embeds
│   ├── services/
│   │   └── contact.ts        # Contact form validation and external endpoint integration
│   ├── components/
│   │   ├── Layout.tsx        # Shell layout with skip-to-content, header, and footer
│   │   ├── Header.tsx        # Responsive header with desktop nav & mobile menu
│   │   ├── Footer.tsx        # Institutional footer with links & status disclosures
│   │   ├── BrandLogo.tsx     # Custom SVG brand mark & editorial typography
│   │   ├── ImageModal.tsx    # Accessible <dialog> modal for gallery enlargement
│   │   ├── ScrollToTop.tsx   # Automatic scroll-to-top on route navigation
│   │   └── DocumentTitle.tsx # Dynamic document title and meta description updates
│   └── pages/
│       ├── Home.tsx          # Asymmetrical hero, purpose, previews, and CTA
│       ├── About.tsx         # Foundation background, values, and governance note
│       ├── MissionVision.tsx # Distinct treatments for Mission and Vision
│       ├── Initiatives.tsx   # Focus areas, interactive gallery, and briefings
│       ├── Contact.tsx       # Accessible enquiry form and contact info
│       ├── PrivacyPolicy.tsx # Privacy practices with draft review status banner
│       ├── TermsConditions.tsx # Terms of use with draft review status banner
│       └── NotFound.tsx      # Helpful 404 destination with quick routes
```

---

## 4. How to Update Content and Images

All textual content, focus areas, and media are centralized in easy-to-edit TypeScript modules inside `src/data/`:

### Updating Organization Information
Open [`src/data/organization.ts`](src/data/organization.ts):
- Update `name`, `tagline`, and `purposeStatement`.
- Update `contact.email`, `contact.phone`, `contact.addressNote`, or `contact.operatingHours`.
- Add verified social links under `socialLinks` when available.
- Edit `guidingPrinciples` and `coreObjectives`.

### Updating Initiatives & Focus Areas
Open [`src/data/initiatives.ts`](src/data/initiatives.ts):
- Add or modify entries in `proposedFocusAreas` (titles, scopes, categories, intended impacts).
- Update status from `"Proposed Focus Area"` to `"Active Initiative"` when programs officially launch.

### Adding Actual Photography to the Gallery
1. Place image files in `public/gallery/` (e.g., `public/gallery/community-workshop.jpg`).
2. In [`src/data/initiatives.ts`](src/data/initiatives.ts), add entries to `galleryItems` referencing image URLs and descriptive captions.
3. The gallery will automatically render the photographs with accessible click-to-enlarge modal dialogs.

### Adding YouTube Video Briefings
In [`src/data/initiatives.ts`](src/data/initiatives.ts), add entries to `foundationVideos`:
```ts
export const foundationVideos = [
  {
    id: "briefing-1",
    title: "Inaugural Community Fairness Forum",
    youtubeId: "YOUR_YOUTUBE_VIDEO_ID"
  }
];
```

---

## 5. Contact Form Configuration

The contact form is built with a decoupled integration boundary pointing to any public HTTPS form processor (e.g., Formspree, Basin, Web3Forms, Getform, or a custom webhook).

### Configuration Steps

1. Create a `.env` file in the project root (copied from [`.env.example`](.env.example)):
   ```bash
   cp .env.example .env
   ```
2. Set the `VITE_CONTACT_FORM_ENDPOINT` variable:
   ```env
   VITE_CONTACT_FORM_ENDPOINT="https://formspree.io/f/your_form_endpoint_id"
   ```
3. Restart the dev server or re-run `npm run build`.

### Request and Response Format

When the form is submitted, a `POST` request is sent to `VITE_CONTACT_FORM_ENDPOINT`:
- **Headers**:
  ```http
  Content-Type: application/json
  Accept: application/json
  ```
- **Payload**:
  ```json
  {
    "fullName": "Jane Doe",
    "email": "jane@example.org",
    "phone": "+1 (555) 000-0000",
    "subject": "Community Workshop Inquiry",
    "message": "We would like to explore hosting a procedural fairness seminar...",
    "submittedAt": "2026-10-30T10:30:00.000Z"
  }
  ```
- **Expected Response**: HTTP status code `200` to `299`.

### Graceful Fallback Mode

If no endpoint is configured (e.g., prior to choosing a provider), the contact page gracefully alerts visitors that online submissions are temporarily offline and provides the direct official email address without exposing technical setup details. Submissions are never silently discarded.

---

## 6. Deployment & SPA Routing

The build produces static HTML, CSS, and JavaScript files in the `dist/` folder. Because this is a Single-Page Application (SPA) using client-side routing via React Router, the host web server must be configured to route all unknown path requests back to `/index.html` (HTTP 200 rewrite fallback).

### Netlify
Add a `public/_redirects` file (or `dist/_redirects`):
```text
/*    /index.html   200
```

### Vercel
Add a `vercel.json` in the project root:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Apache (`.htaccess`)
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### Nginx
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

---

## 7. Client Review & Ratification Checklist

In accordance with strict content integrity standards, the following items are flagged for final FAIRCLAIM FOUNDATION client verification prior to public announcement:

- [ ] **Official Registration & Charitable Status**: Enter statutory registration numbers, incorporation dates, or tax status once officially issued.
- [ ] **Physical Office Address**: Confirm official headquarters location or registered postal address.
- [ ] **Official Contact Channels**: Confirm primary telephone, WhatsApp business number, or official email addresses.
- [ ] **Social Media Profiles**: Provide links to verified institutional LinkedIn, X, or YouTube accounts.
- [ ] **Legal Review of Policies**: Have legal counsel review and ratify [`src/pages/PrivacyPolicy.tsx`](src/pages/PrivacyPolicy.tsx) and [`src/pages/TermsConditions.tsx`](src/pages/TermsConditions.tsx).
- [ ] **Production Domain & Form Endpoint**: Wire production domain and set `VITE_CONTACT_FORM_ENDPOINT` in production hosting environment variables.
