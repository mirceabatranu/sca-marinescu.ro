import type { APIRoute } from 'astro';

const entries = ['/', '/en/'];

export const GET: APIRoute = ({ site }) => {
  const baseUrl = site ?? new URL('https://sca-marinescu.ro');
  const now = new Date().toISOString();
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map((path) => {
    const location = new URL(path, baseUrl).toString();
    return `  <url>\n    <loc>${location}</loc>\n    <lastmod>${now}</lastmod>\n  </url>`;
  })
  .join('\n')}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};