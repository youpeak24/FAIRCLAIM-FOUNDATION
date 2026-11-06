import { notFoundMeta, pages } from '../data/pageMeta';
import { faqs, mission, organization } from '../data/organization';
import { focusAreas } from '../data/initiatives';

/**
 * Canonical production origin (the host Vercel serves; the bare domain redirects to it).
 * No trailing slash. Everything else (sitemap, robots.txt, llms.txt, canonicals,
 * JSON-LD) derives from this one value.
 */
export const SITE_URL = 'https://www.fairclaimfoundation.org';

export const SITE = {
  name: 'Fairclaim Foundation',
  legalName: 'FAIRCLAIM FOUNDATION',
  locale: 'en_US',
  language: 'en',
  themeColor: '#FAF9F5',
  logo: '/brand/fairclaim-emblem.png',
  logoWidth: 648,
  logoHeight: 644,
  ogImage: '/og-image.png',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt:
    'Fairclaim Foundation: a fairer future, built together. Emblem of a handshake beneath a sunrise inside a circular seal.',
} as const;

const ROBOTS_INDEX = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
const ROBOTS_NOINDEX = 'noindex, follow';

/** Normalise a router pathname: no trailing slash (except root), no query/hash. */
export function normalizePath(pathname: string): string {
  const clean = pathname.split(/[?#]/)[0] || '/';
  return clean.length > 1 ? clean.replace(/\/+$/, '') : '/';
}

export const absoluteUrl = (path: string) => (path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`);

export interface HeadModel {
  title: string;
  description: string;
  canonical: string;
  robots: string;
  indexable: boolean;
  ogType: 'website';
  jsonLd: object | null;
  preloadImage?: string;
}

const ids = {
  org: `${SITE_URL}/#organization`,
  site: `${SITE_URL}/#website`,
  logo: `${SITE_URL}/#logo`,
  image: `${SITE_URL}/#primaryimage`,
};

function organizationNode() {
  const { contact, social } = organization;
  return {
    '@type': 'Organization',
    '@id': ids.org,
    name: SITE.name,
    legalName: SITE.legalName,
    url: `${SITE_URL}/`,
    slogan: organization.tagline,
    description: mission,
    logo: {
      '@type': 'ImageObject',
      '@id': ids.logo,
      url: absoluteUrl(SITE.logo),
      contentUrl: absoluteUrl(SITE.logo),
      width: SITE.logoWidth,
      height: SITE.logoHeight,
      caption: `${SITE.name} emblem`,
    },
    image: { '@id': ids.logo },
    // Only confirmed facts are published: these appear once filled in organization.ts
    ...(contact.email ? { email: contact.email } : {}),
    ...(contact.phone ? { telephone: contact.phone } : {}),
    ...(contact.address ? { address: contact.address } : {}),
    ...(social.length ? { sameAs: social.map((s) => s.url) } : {}),
  };
}

function websiteNode() {
  return {
    '@type': 'WebSite',
    '@id': ids.site,
    url: `${SITE_URL}/`,
    name: SITE.name,
    alternateName: SITE.legalName,
    description: pages['/'].description,
    inLanguage: SITE.language,
    publisher: { '@id': ids.org },
  };
}

function jsonLdFor(path: string): object {
  const page = pages[path];
  const url = absoluteUrl(path);
  const graph: object[] = [organizationNode(), websiteNode()];

  graph.push({
    '@type': page.schemaType,
    '@id': `${url}#webpage`,
    url,
    name: page.title,
    description: page.description,
    inLanguage: SITE.language,
    isPartOf: { '@id': ids.site },
    about: { '@id': ids.org },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      '@id': ids.image,
      url: absoluteUrl(SITE.ogImage),
      width: SITE.ogImageWidth,
      height: SITE.ogImageHeight,
    },
    ...(path !== '/' ? { breadcrumb: { '@id': `${url}#breadcrumb` } } : {}),
  });

  if (path !== '/') {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: pages['/'].name, item: absoluteUrl('/') },
        { '@type': 'ListItem', position: 2, name: page.name, item: url },
      ],
    });
  }

  if (path === '/') {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    });
  }

  if (path === '/initiatives') {
    graph.push({
      '@type': 'ItemList',
      '@id': `${url}#focus-areas`,
      name: 'Proposed focus areas of Fairclaim Foundation',
      numberOfItems: focusAreas.length,
      itemListElement: focusAreas.map((a, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: a.title,
        description: a.description,
        url: `${url}#${a.id}`,
      })),
    });
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}

/** Everything that belongs in <head> for a route, as plain data. */
export function headModel(pathname: string): HeadModel {
  const path = normalizePath(pathname);
  const page = pages[path];

  if (!page) {
    return {
      ...notFoundMeta,
      canonical: absoluteUrl('/'),
      robots: ROBOTS_NOINDEX,
      indexable: false,
      ogType: 'website',
      jsonLd: null,
    };
  }

  return {
    title: page.title,
    description: page.description,
    canonical: absoluteUrl(path),
    robots: ROBOTS_INDEX,
    indexable: true,
    ogType: 'website',
    jsonLd: jsonLdFor(path),
    preloadImage: path === '/' ? SITE.logo : undefined,
  };
}

/** [attribute-name, attribute-value, content] for each <meta> tag. */
export function metaTags(model: HeadModel): [string, string, string][] {
  const image = absoluteUrl(SITE.ogImage);
  return [
    ['name', 'description', model.description],
    ['name', 'robots', model.robots],
    ['name', 'googlebot', model.robots],
    ['name', 'author', SITE.name],
    ['property', 'og:type', model.ogType],
    ['property', 'og:site_name', SITE.name],
    ['property', 'og:locale', SITE.locale],
    ['property', 'og:title', model.title],
    ['property', 'og:description', model.description],
    ['property', 'og:url', model.canonical],
    ['property', 'og:image', image],
    ['property', 'og:image:secure_url', image],
    ['property', 'og:image:type', 'image/png'],
    ['property', 'og:image:width', String(SITE.ogImageWidth)],
    ['property', 'og:image:height', String(SITE.ogImageHeight)],
    ['property', 'og:image:alt', SITE.ogImageAlt],
    ['name', 'twitter:card', 'summary_large_image'],
    ['name', 'twitter:title', model.title],
    ['name', 'twitter:description', model.description],
    ['name', 'twitter:image', image],
    ['name', 'twitter:image:alt', SITE.ogImageAlt],
  ];
}

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Serialise JSON for a <script> tag without allowing "</script>" or HTML comments to escape it. */
const safeJson = (data: object) =>
  JSON.stringify(data).replace(/</g, '\\u003c').replace(/>/g, '\\u003e').replace(/&/g, '\\u0026');

/** Static <head> markup injected at build time (prerender). */
export function headHtml(pathname: string): string {
  const model = headModel(pathname);
  const lines = [
    `<title>${esc(model.title)}</title>`,
    ...metaTags(model).map(([attr, key, value]) => `<meta ${attr}="${key}" content="${esc(value)}" />`),
    `<link rel="canonical" href="${esc(model.canonical)}" />`,
  ];
  if (model.indexable) {
    lines.push(
      `<link rel="alternate" hreflang="${SITE.language}" href="${esc(model.canonical)}" />`,
      `<link rel="alternate" hreflang="x-default" href="${esc(model.canonical)}" />`,
    );
  }
  if (model.preloadImage) {
    lines.push(`<link rel="preload" as="image" href="${esc(model.preloadImage)}" />`);
  }
  if (model.jsonLd) {
    lines.push(`<script type="application/ld+json" id="ld-json">${safeJson(model.jsonLd)}</script>`);
  }
  return lines.join('\n    ');
}

/** Keep <head> in step with the route during client-side navigation. */
export function applyHead(pathname: string): void {
  const model = headModel(pathname);
  const head = document.head;

  document.title = model.title;

  for (const [attr, key, value] of metaTags(model)) {
    let el = head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attr, key);
      head.appendChild(el);
    }
    el.setAttribute('content', value);
  }

  let canonical = head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    head.appendChild(canonical);
  }
  canonical.href = model.canonical;

  head.querySelectorAll<HTMLLinkElement>('link[rel="alternate"][hreflang]').forEach((el) => {
    if (model.indexable) el.href = model.canonical;
    else el.remove();
  });

  const ld = head.querySelector<HTMLScriptElement>('script#ld-json');
  if (model.jsonLd) {
    const el = ld ?? Object.assign(document.createElement('script'), { type: 'application/ld+json', id: 'ld-json' });
    el.textContent = safeJson(model.jsonLd);
    if (!ld) head.appendChild(el);
  } else {
    ld?.remove();
  }
}
