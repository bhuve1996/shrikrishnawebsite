// Site configuration - All website content should be driven from this file
// Update values here to reflect across the entire website

export const siteConfig = {
  name: 'Shri Krishna Core Cutting and Rebaring',
  shortName: 'Shri Krishna Core Cutting',
  tagline: 'Professional Core Cutting & Rebaring Services in Kharar, Mohali',
  description:
    'Expert RCC core cutting, chemical rebaring, chimney hole cutting, concrete drilling, and waterproofing services in Kharar, Mohali, Punjab. GST registered, 70+ satisfied customers. Call for free quote!',
  url: 'https://shrikrishnacorecutting.com',
  ogImage: '/Shree_logo.png',
  favicon: '/Shree_logo.png',
  keywords: [
    'core cutting Kharar',
    'core cutting Mohali',
    'RCC core cutting Punjab',
    'chemical rebaring services Punjab',
    'concrete cutting contractor near me',
    'chimney hole cutting Chandigarh',
    'drilling contractor Kharar',
    'waterproofing services Mohali',
    'concrete drilling Punjab',
    'industrial core cutting services',
  ],
  author: 'Shri Krishna Core Cutting and Rebaring',
  locale: 'en_IN',
  themeColor: '#1e3a5f',
  language: 'en',
  currency: 'INR',
};

export const businessInfo = {
  name: 'Shri Krishna Core Cutting and Rebaring',
  legalName: 'Shri Krishna Core Cutting And Rebaring',
  phone: '+917888784324',
  phoneDisplay: '078887 84324',
  whatsapp: '+917888784324',
  email: 'skccrw@gmail.com',
  gstNumber: '', // Add GST number when available
  address: {
    street: '#169, Krishna Enclave, KHANPUR',
    area: 'Kharar',
    city: 'Kharar',
    district: 'Sahibzada Ajit Singh Nagar',
    state: 'Punjab',
    pincode: '140301',
    country: 'India',
    full: '#169, Krishna Enclave, KHANPUR, Kharar, Punjab 140301',
  },
  coordinates: {
    latitude: 30.7599727,
    longitude: 76.6256372,
  },
  plusCode: 'QJ5H+X7 Kharar, Punjab',
  googleMapsUrl:
    'https://www.google.com/maps/place/Shri+Krishna+Core+Cutting+and+Rebaring/@30.7599727,76.6256372,17z/data=!3m1!4b1!4m6!3m5!1s0x390ffbe5f78bfc43:0x902e798f0cd0ff42!8m2!3d30.7599727!4d76.6282121!16s%2Fg%2F11qpxb29n4',
  googleMapsPlaceId: 'ChIJQ_yLd-X_DTkRQv_QDP54LpA',
  rating: 5.0,
  reviewCount: 70,
  yearsInBusiness: 4,
  projectsCompleted: 500,
  foundedYear: 2020,
  hours: {
    weekdays: '9:00 AM - 9:00 PM',
    saturday: '9:00 AM - 9:00 PM',
    sunday: '10:00 AM - 6:00 PM',
  },
};

export const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
];

export const socialLinks = {
  whatsapp: `https://wa.me/${businessInfo.whatsapp.replace('+', '')}?text=${encodeURIComponent("Hi, I'm interested in your core cutting services.")}`,
  googleMaps: businessInfo.googleMapsUrl,
  phone: `tel:${businessInfo.phone}`,
  email: `mailto:${businessInfo.email}`,
};

export const ctaText = {
  primary: 'Get Free Quote',
  secondary: 'Call Now',
  whatsapp: 'WhatsApp Us',
  viewServices: 'View Services',
  contactUs: 'Contact Us',
  learnMore: 'Learn More',
};

// Hero section content
export const heroContent = {
  badge: 'Trusted by 70+ Customers',
  title: 'Professional Core Cutting & Rebaring Services',
  subtitle: `Expert RCC core cutting, chemical rebaring, and concrete drilling services in Kharar, Mohali & Tricity region. ${businessInfo.yearsInBusiness}+ years of experience.`,
  backgroundImage: '/images/gallery/photo_5.jpg',
  highlights: [
    `${businessInfo.rating} ★ Rating`,
    `${businessInfo.reviewCount}+ Happy Customers`,
    'Free Estimates',
  ],
};

// Statistics to display
export const stats = [
  { value: `${businessInfo.yearsInBusiness}+`, label: 'Years Experience' },
  { value: `${businessInfo.projectsCompleted}+`, label: 'Projects Done' },
  { value: `${businessInfo.reviewCount}+`, label: 'Happy Clients' },
  { value: `${businessInfo.rating}`, label: 'Star Rating' },
];

// Footer content
export const footerContent = {
  description: `${siteConfig.name} provides professional core cutting, rebaring, and concrete drilling services across Kharar, Mohali, Chandigarh, and surrounding areas.`,
  copyright: `© ${new Date().getFullYear()} ${siteConfig.name}. All rights reserved.`,
  quickLinks: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'FAQs', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ],
};

// About page content
export const aboutContent = {
  badge: 'About Us',
  title: 'About Shri Krishna Core Cutting',
  subtitle: 'Your Trusted Partner for Construction Drilling Services',
  heroImage: '/images/gallery/photo_9.jpg',
  storyTitle: 'Our Story',
  description: `Founded in ${businessInfo.foundedYear}, Shri Krishna Core Cutting and Rebaring has grown to become one of the most trusted names in professional core cutting and rebaring services in the Tricity region. With over ${businessInfo.projectsCompleted}+ completed projects and ${businessInfo.reviewCount}+ satisfied customers, we take pride in delivering quality workmanship on every job.`,
  mission:
    'To provide the highest quality core cutting and rebaring services with precision, safety, and reliability at competitive prices.',
  vision:
    'To be the most trusted and preferred core cutting contractor in Punjab and Northern India.',
  valuesSection: {
    title: 'Our Values',
    subtitle: 'The principles that guide everything we do',
  },
  values: [
    {
      title: 'Quality First',
      description: 'We never compromise on the quality of our work and materials.',
    },
    {
      title: 'Customer Focus',
      description: 'Your satisfaction is our top priority on every project.',
    },
    {
      title: 'Safety',
      description: 'We follow strict safety protocols to protect people and property.',
    },
    {
      title: 'Integrity',
      description: 'Honest pricing, transparent processes, and reliable service.',
    },
  ],
  workShowcase: {
    title: 'Our Work in Action',
    subtitle: 'See our team delivering quality results on real projects',
    images: [1, 2, 3, 4, 6, 7, 8, 9], // photo numbers to show
  },
  journeySection: {
    title: 'Our Journey',
    subtitle: 'Key milestones in our growth story',
  },
  areasSection: {
    title: 'Where We Work',
    subtitle: 'Serving the Tricity region and beyond',
  },
  storyImages: [
    { src: '/images/gallery/photo_1.jpg', alt: 'Core cutting work' },
    { src: '/images/gallery/photo_5.jpg', alt: 'Industrial drilling' },
  ],
};

// Gallery page content
export const galleryContent = {
  badge: 'Our Work',
  title: 'Our Work Gallery',
  subtitle: 'See the quality of our completed projects',
  emptyMessage: 'No projects found in this category.',
  images: [
    { src: '/images/gallery/photo_1.jpg', alt: 'Core cutting project', category: 'Core Cutting' },
    { src: '/images/gallery/photo_2.jpg', alt: 'Rebaring work', category: 'Rebaring' },
    { src: '/images/gallery/photo_3.jpg', alt: 'Concrete drilling', category: 'Drilling' },
    { src: '/images/gallery/photo_4.jpg', alt: 'Industrial project', category: 'Industrial' },
    { src: '/images/gallery/photo_5.jpg', alt: 'Core cutting project', category: 'Core Cutting' },
    { src: '/images/gallery/photo_6.jpg', alt: 'Rebaring work', category: 'Rebaring' },
    { src: '/images/gallery/photo_7.jpg', alt: 'Chimney hole cutting', category: 'Chimney' },
    { src: '/images/gallery/photo_8.jpg', alt: 'Commercial project', category: 'Commercial' },
    { src: '/images/gallery/photo_9.jpg', alt: 'Drilling work', category: 'Drilling' },
    { src: '/images/gallery/photo_10.jpg', alt: 'Industrial work', category: 'Industrial' },
    { src: '/images/gallery/photo_11.jpg', alt: 'Dismantling project', category: 'Dismantling' },
  ],
};

// Services page content
export const servicesPageContent = {
  badge: 'Professional Services',
  heroImage: '/images/gallery/photo_2.jpg',
  methodologySection: {
    title: 'Our Work Methodology',
    subtitle: 'Professional, systematic approach to every project',
  },
  industriesSection: {
    title: 'Industries We Serve',
    subtitle: 'Trusted by businesses across multiple sectors',
  },
  complianceSection: {
    title: 'Fully Compliant Business',
    description:
      'We are a GST registered company with proper billing and documentation for all projects.',
  },
};

// Service areas section content
export const serviceAreasSection = {
  title: 'Areas We Serve',
  subtitle: 'Professional core cutting and rebaring services across the Tricity region',
  notInListText: 'Not in the list? Contact us to check if we serve your area.',
  ctaText: 'Contact Us for Your Area',
};

// Project showcase slider content (homepage)
export const projectShowcase = {
  title: 'Our Recent Projects',
  subtitle: 'Real work from our satisfied customers across Tricity',
  autoPlayInterval: 4000, // milliseconds
  slides: [
    {
      src: '/images/gallery/photo_1.jpg',
      title: 'Commercial Core Cutting',
      description: 'Precision core cutting for fire safety installations',
      category: 'Core Cutting',
    },
    {
      src: '/images/gallery/photo_2.jpg',
      title: 'Industrial Drilling Project',
      description: 'Heavy-duty core drilling at industrial facility',
      category: 'Core Cutting',
    },
    {
      src: '/images/gallery/photo_3.jpg',
      title: 'Residential Installation',
      description: 'Clean AC and chimney hole cutting for apartments',
      category: 'Chimney Cutting',
    },
    {
      src: '/images/gallery/photo_4.jpg',
      title: 'Structural Rebaring',
      description: 'Professional rebaring for building extensions',
      category: 'Rebaring',
    },
    {
      src: '/images/gallery/photo_5.jpg',
      title: 'Factory Floor Work',
      description: 'Core cutting in industrial factory with safety equipment',
      category: 'Industrial',
    },
    {
      src: '/images/gallery/photo_6.jpg',
      title: 'Drainage Installation',
      description: 'Large diameter cutting for plumbing work',
      category: 'Core Cutting',
    },
    {
      src: '/images/gallery/photo_7.jpg',
      title: 'MEP Installations',
      description: 'Core cutting for mechanical and electrical passages',
      category: 'Core Cutting',
    },
    {
      src: '/images/gallery/photo_8.jpg',
      title: 'Commercial Building',
      description: 'Multi-floor core cutting for utilities',
      category: 'Commercial',
    },
  ],
};
