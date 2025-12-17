import { siteConfig, businessInfo } from './site.config';
import { services } from './services.config';

export const defaultSEO = {
  title: siteConfig.name,
  titleTemplate: `%s | ${siteConfig.shortName}`,
  description: siteConfig.description,
  canonical: siteConfig.url,
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    cardType: 'summary_large_image',
  },
};

export const generateLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': siteConfig.url,
  name: businessInfo.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: businessInfo.phone,
  email: businessInfo.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: businessInfo.address.street,
    addressLocality: businessInfo.address.city,
    addressRegion: businessInfo.address.state,
    postalCode: businessInfo.address.pincode,
    addressCountry: businessInfo.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: businessInfo.coordinates.latitude,
    longitude: businessInfo.coordinates.longitude,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '21:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '10:00',
      closes: '18:00',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: businessInfo.rating,
    reviewCount: businessInfo.reviewCount,
    bestRating: 5,
    worstRating: 1,
  },
  priceRange: '$$',
  image: `${siteConfig.url}/og-image.jpg`,
  sameAs: [businessInfo.googleMapsUrl],
});

export const generateServiceSchema = (serviceId: string) => {
  const service = services.find((s) => s.id === serviceId);
  if (!service) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      name: businessInfo.name,
      telephone: businessInfo.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: businessInfo.address.street,
        addressLocality: businessInfo.address.city,
        addressRegion: businessInfo.address.state,
        postalCode: businessInfo.address.pincode,
        addressCountry: businessInfo.address.country,
      },
    },
    areaServed: {
      '@type': 'City',
      name: 'Kharar, Mohali, Chandigarh',
    },
  };
};

export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `${siteConfig.url}${item.url}`,
  })),
});

export const generateFAQSchema = (faqs: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

export const pageSEO = {
  home: {
    title: 'Core Cutting & Rebaring Services in Kharar, Mohali',
    description:
      'Professional core cutting, rebaring, chimney hole cutting, and concrete drilling services in Kharar, Mohali, Punjab. 70+ 5-star reviews. Call now for free quote!',
  },
  services: {
    title: 'Our Services',
    description:
      'Expert core cutting, rebaring, chimney hole cutting, concrete drilling, dismantling, and waterproofing services. Quality work at competitive prices.',
  },
  about: {
    title: 'About Us',
    description:
      'Learn about Shri Krishna Core Cutting and Rebaring - your trusted partner for construction drilling services in Kharar, Mohali with 4+ years of experience.',
  },
  contact: {
    title: 'Contact Us',
    description:
      'Get in touch with Shri Krishna Core Cutting for free quotes. Call 078887 84324 or fill our contact form. We serve Kharar, Mohali, Chandigarh & surrounding areas.',
  },
  gallery: {
    title: 'Our Work Gallery',
    description:
      'View our completed core cutting, rebaring, and concrete drilling projects. See the quality of our work across residential and commercial projects.',
  },
  faq: {
    title: 'Frequently Asked Questions',
    description:
      'Find answers to common questions about core cutting, rebaring, pricing, and our services in Kharar, Mohali, and the Tricity region.',
  },
};
