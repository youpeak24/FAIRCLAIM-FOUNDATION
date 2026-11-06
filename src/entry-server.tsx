/* oxlint-disable react/only-export-components -- server entry, never hot-reloaded */
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { AppRoutes } from './App';

export { headHtml, SITE_URL, absoluteUrl } from './lib/seo';
export { pages } from './data/pageMeta';

/** Server entry used only by scripts/prerender.mjs at build time. */
export function render(url: string): string {
  return renderToString(
    <StaticRouter location={url}>
      <AppRoutes />
    </StaticRouter>,
  );
}
