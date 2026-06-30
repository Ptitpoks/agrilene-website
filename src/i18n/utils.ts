export type Locale = 'fr' | 'en';

export function getLangFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/');
  if (lang === 'en') return 'en';
  return 'fr';
}

export function getAlternateUrl(url: URL, targetLang: Locale): string {
  const segments = url.pathname.split('/').filter(Boolean);
  if (targetLang === 'en') {
    if (segments[0] === 'en') return url.pathname;
    return '/en/' + segments.join('/');
  } else {
    if (segments[0] === 'en') return '/' + segments.slice(1).join('/') || '/';
    return url.pathname;
  }
}
