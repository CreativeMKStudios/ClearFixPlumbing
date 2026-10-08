import { areas, otherTowns } from '../data/areas';
import { business } from '../data/business';
import type { Faq } from '../data/services';

export type Crumb = { name: string; path: string };

function abs(site: URL, path: string) {
  return new URL(path, site).href;
}

export function businessNode(site: URL) {
  const areaServed = [...areas.map((area) => area.name), ...otherTowns.map((town) => town.name)].map(
    (name) => ({
      '@type': 'City',
      name,
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: 'Bedfordshire',
      },
    }),
  );

  return {
    '@type': 'Plumber',
    '@id': `${abs(site, '/')}#business`,
    name: business.name,
    alternateName: [business.googleName, 'CLEARFIX', 'ClearFix'],
    slogan: business.slogan,
    description:
      'Bedford plumber for leaks, blocked drains, taps, toilets, showers, bathrooms, kitchens, and heating. Open 24 hours.',
    url: abs(site, '/'),
    telephone: business.phoneTel,
    email: business.email,
    image: [abs(site, '/og.jpg')],
    logo: abs(site, '/apple-touch-icon.png'),
    hasMap: business.mapUrl,
    currenciesAccepted: 'GBP',
    address: {
      '@type': 'PostalAddress',
      addressLocality: business.city,
      addressRegion: business.region,
      addressCountry: business.countryCode,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    areaServed,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    knowsLanguage: 'en-GB',
    sameAs: [business.mapUrl],
  };
}

export function webSiteNode(site: URL) {
  return {
    '@type': 'WebSite',
    '@id': `${abs(site, '/')}#website`,
    url: abs(site, '/'),
    name: business.name,
    inLanguage: 'en-GB',
    publisher: { '@id': `${abs(site, '/')}#business` },
  };
}

export function webPageNode(site: URL, path: string, title: string, description: string) {
  return {
    '@type': 'WebPage',
    '@id': `${abs(site, path)}#webpage`,
    url: abs(site, path),
    name: title,
    description,
    isPartOf: { '@id': `${abs(site, '/')}#website` },
    about: { '@id': `${abs(site, '/')}#business` },
    inLanguage: 'en-GB',
  };
}

export function breadcrumbNode(site: URL, crumbs: Crumb[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: abs(site, crumb.path),
    })),
  };
}

export function faqNode(faqs: Faq[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };
}

export function serviceNode(site: URL, path: string, name: string, description: string) {
  return {
    '@type': 'Service',
    name,
    description,
    url: abs(site, path),
    serviceType: name,
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Bedford',
    },
    provider: { '@id': `${abs(site, '/')}#business` },
  };
}

export function jsonLd(nodes: Record<string, unknown>[]) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': nodes,
  }).replace(/</g, '\\u003c');
}
