import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const baseUrl = site ?? new URL('https://sca-marinescu.ro');
  const body = [
    'User-agent: *',
    'Allow: /',
    'Disallow: /demo/',
    `Sitemap: ${new URL('/sitemap.xml', baseUrl).toString()}`,
    `Host: ${baseUrl.host}`,
  ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};