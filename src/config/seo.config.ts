import { siteConfig, businessInfo } from './site.config';
import { services, serviceKeywords } from './services.config';

// Default SEO configuration
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
        url: `${siteConfig.url}${siteConfig.ogImage}`,
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

// Generate LocalBusiness schema for structured data
export const generateLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${siteConfig.url}/#business`,
  name: businessInfo.name,
  alternateName: businessInfo.legalName,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: businessInfo.phone,
  email: businessInfo.email,
  image: `${siteConfig.url}${siteConfig.ogImage}`,
  logo: `${siteConfig.url}${siteConfig.ogImage}`,
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
  hasMap: businessInfo.googleMapsUrl,
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
  priceRange: '₹₹',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, UPI, Bank Transfer',
  areaServed: [
    { '@type': 'City', name: 'Kharar' },
    { '@type': 'City', name: 'Mohali' },
    { '@type': 'City', name: 'Chandigarh' },
    { '@type': 'City', name: 'Panchkula' },
    { '@type': 'City', name: 'Zirakpur' },
  ],
  sameAs: [businessInfo.googleMapsUrl],
  foundingDate: `${businessInfo.foundedYear}-01-01`,
  keywords: serviceKeywords.join(', '),
});

// Generate Service schema for individual service pages
export const generateServiceSchema = (serviceId: string) => {
  const service = services.find((s) => s.id === serviceId);
  if (!service) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteConfig.url}/services#${serviceId}`,
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${siteConfig.url}/#business`,
      name: businessInfo.name,
      telephone: businessInfo.phone,
    },
    areaServed: {
      '@type': 'State',
      name: 'Punjab, India',
    },
    serviceType: service.name,
  };
};

// Generate all services schema
export const generateAllServicesSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: services.map((service, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Service',
      name: service.name,
      description: service.shortDescription,
      url: `${siteConfig.url}/services#${service.id}`,
    },
  })),
});

// Generate Breadcrumb schema
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

// Generate FAQ schema
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

// Generate Organization schema
export const generateOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${siteConfig.url}/#organization`,
  name: businessInfo.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}${siteConfig.ogImage}`,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: businessInfo.phone,
    contactType: 'customer service',
    availableLanguage: ['English', 'Hindi', 'Punjabi'],
    areaServed: 'IN',
  },
});

// Page-specific SEO metadata
export const pageSEO = {
  home: {
    title: 'Core Cutting & Rebaring Services in Kharar, Mohali',
    description: `Professional RCC core cutting, chemical rebaring, chimney hole cutting, and concrete drilling services in Kharar, Mohali, Punjab. ${businessInfo.reviewCount}+ 5-star reviews. GST registered. Call for free quote!`,
    keywords: [
      'core cutting Kharar',
      'rebaring services Mohali',
      'concrete drilling Punjab',
      'chimney hole cutting',
    ],
  },
  services: {
    title: 'Our Services - Core Cutting, Rebaring, Drilling',
    description:
      'Expert RCC core cutting (50-250mm), chemical rebaring with Hilti & Fischer, chimney hole cutting, concrete drilling, dismantling, and waterproofing services. Quality work at competitive prices.',
    keywords: [
      'RCC core cutting',
      'chemical rebaring',
      'concrete drilling',
      'chimney hole cutting',
    ],
  },
  about: {
    title: 'About Us - Trusted Core Cutting Contractor',
    description: `Learn about Shri Krishna Core Cutting and Rebaring - your trusted partner for construction drilling services in Kharar, Mohali with ${businessInfo.yearsInBusiness}+ years of experience and ${businessInfo.projectsCompleted}+ projects.`,
    keywords: ['core cutting contractor', 'Kharar contractor', 'Mohali drilling services'],
  },
  contact: {
    title: 'Contact Us - Get Free Quote',
    description: `Get in touch with Shri Krishna Core Cutting for free quotes. Call ${businessInfo.phoneDisplay} or WhatsApp. We serve Kharar, Mohali, Chandigarh & surrounding areas.`,
    keywords: ['contact core cutting', 'free quote drilling', 'Kharar contractor contact'],
  },
  gallery: {
    title: 'Our Work Gallery - Project Photos',
    description:
      'View our completed core cutting, rebaring, and concrete drilling projects. See the quality of our work across residential, commercial, and industrial projects.',
    keywords: ['core cutting photos', 'drilling project gallery', 'rebaring work samples'],
  },
  faq: {
    title: 'Frequently Asked Questions',
    description:
      'Find answers to common questions about core cutting, rebaring, pricing, and our services in Kharar, Mohali, and the Tricity region.',
    keywords: ['core cutting FAQ', 'drilling questions', 'rebaring information'],
  },
};
