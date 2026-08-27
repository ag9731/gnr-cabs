export default function sitemap() {
  const baseUrl = 'https://gnrcabszone.in';

  // Core static pages
  const corePages = [
    '',
    '/about',
    '/services',
    '/packages',
    '/pricing',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Services dynamic pages
  const servicePages = [
    'local-cab-booking',
    'outstation-cab-booking',
    'airport-taxi',
    'corporate-cabs',
    'trip-packages',
  ].map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  return [...corePages, ...servicePages];
}
