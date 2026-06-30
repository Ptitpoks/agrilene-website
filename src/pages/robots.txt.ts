export async function GET() {
  const isPreview = import.meta.env.PUBLIC_SITE_ENV === 'preview';

  const content = isPreview
    ? `User-agent: *\nDisallow: /\n`
    : `User-agent: *\nAllow: /\nDisallow: /mentions-legales\nDisallow: /politique-de-confidentialite\nDisallow: /en/mentions-legales\nDisallow: /en/politique-de-confidentialite\n\nSitemap: https://www.agrilene.fr/sitemap-index.xml\n`;

  return new Response(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
