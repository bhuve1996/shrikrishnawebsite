// Services configuration based on actual invoices and quotations
// All data derived from real executed work

export interface ServiceSpecification {
  label: string;
  value: string;
}

export interface Service {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  icon: string;
  useCases: string[];
  benefits: string[];
  specifications?: ServiceSpecification[];
  chemicals?: string[];
  image: string;
  galleryImages?: string[];
}

export const services: Service[] = [
  {
    id: 'rcc-core-cutting',
    name: 'RCC Core Cutting',
    shortDescription:
      'Precision RCC core cutting services for residential, commercial, and industrial projects.',
    description:
      'We provide professional RCC core cutting services using advanced diamond core drilling machinery. Our team executes clean, vibration-controlled cutting without damaging the surrounding structure. Suitable for RCC slabs, beams, columns, shear walls, and foundations.',
    icon: 'CircleDot',
    specifications: [
      { label: 'Diameter Range', value: '50 mm to 250 mm' },
      { label: 'Depth Capability', value: 'Up to 300 mm and beyond' },
      {
        label: 'Applicable Structures',
        value: 'RCC slabs, beams, columns, shear walls, foundations',
      },
    ],
    useCases: [
      'Plumbing and drainage lines',
      'Electrical and HVAC conduits',
      'Fire-fighting pipelines',
      'Industrial machinery installations',
      'Structural modifications',
      'AC pipe and duct holes',
    ],
    benefits: [
      'Dust-free operation with wet cutting',
      'No structural damage or cracks',
      'Precise diameter control',
      'Minimal noise and vibration',
      'Fast and efficient execution',
      'Low-vibration diamond core machines',
    ],
    image: '/images/gallery/photo_1.jpg',
    galleryImages: [
      '/images/gallery/photo_1.jpg',
      '/images/gallery/photo_2.jpg',
      '/images/gallery/photo_3.jpg',
    ],
  },
  {
    id: 'chemical-rebaring',
    name: 'Chemical Rebaring',
    shortDescription:
      'Expert rebar installation and reinforcement anchoring with chemical bonding.',
    description:
      'We specialize in chemical rebaring for structural strengthening and load-bearing extensions. Our rebaring services involve drilling holes in existing concrete structures and installing steel reinforcement bars with high-strength epoxy or grout following proper curing time and manufacturer specifications.',
    icon: 'Layers',
    specifications: [
      { label: '10 mm Bar', value: '100 mm depth' },
      { label: '12 mm Bar', value: '120 mm depth' },
      { label: '16 mm Bar', value: '160 mm depth' },
      { label: '20 mm Bar', value: '200 mm depth' },
    ],
    chemicals: ['Hilti RE-10', 'Fischer FIS-360', 'Fischer EP-585 S'],
    useCases: [
      'Column extensions',
      'Beam strengthening',
      'Structural retrofitting',
      'Machine base anchoring',
      'Industrial foundations',
      'Connecting new slabs to existing structures',
    ],
    benefits: [
      'High-strength chemical anchoring',
      'Certified installation procedures',
      'Non-destructive to existing structure',
      'Long-lasting durability',
      'Suitable for all concrete types',
      'All installations follow manufacturer specifications',
    ],
    image: '/images/gallery/photo_4.jpg',
    galleryImages: [
      '/images/gallery/photo_4.jpg',
      '/images/gallery/photo_5.jpg',
      '/images/gallery/photo_6.jpg',
    ],
  },
  {
    id: 'chimney-hole-cutting',
    name: 'Chimney Hole Cutting',
    shortDescription: 'Specialized cutting for kitchen chimneys and exhaust systems.',
    description:
      'We provide expert chimney hole cutting services for kitchen exhaust systems, industrial chimneys, and ventilation ducts. Our precise cutting ensures perfect fitment for your chimney installations with proper sealing and finishing.',
    icon: 'Wind',
    useCases: [
      'Kitchen chimney installations',
      'Industrial exhaust systems',
      'Restaurant kitchen ventilation',
      'Bathroom exhaust fans',
      'HVAC duct passages',
      'Fresh air intake systems',
    ],
    benefits: [
      'Perfect circular cuts for all chimney sizes',
      'Clean edges for proper sealing',
      'Minimal wall damage',
      'Quick installation ready finish',
      'Works on all wall types',
    ],
    image: '/images/gallery/photo_7.jpg',
    galleryImages: ['/images/gallery/photo_7.jpg', '/images/gallery/photo_8.jpg'],
  },
  {
    id: 'concrete-drilling',
    name: 'Concrete Drilling',
    shortDescription: 'Heavy-duty drilling for anchors, bolts, and deep penetrations.',
    description:
      'Our concrete drilling services handle everything from small anchor holes to deep penetrations for industrial applications. We use professional-grade rotary hammers and diamond drill bits for efficient drilling in the toughest concrete and masonry.',
    icon: 'Target',
    useCases: [
      'Anchor bolt installations',
      'Handrail and railing fixings',
      'Machine foundation bolts',
      'Signage and billboard mounting',
      'Cable and wire passages',
      'Structural testing cores',
    ],
    benefits: [
      'High-speed drilling capability',
      'Accurate depth control',
      'Multiple diameter options',
      'Works on reinforced concrete',
      'Dust extraction systems',
    ],
    image: '/images/gallery/photo_9.jpg',
    galleryImages: ['/images/gallery/photo_9.jpg', '/images/gallery/photo_10.jpg'],
  },
  {
    id: 'dismantling',
    name: 'Dismantling Work',
    shortDescription: 'Safe and controlled demolition and dismantling services.',
    description:
      'Our dismantling services provide safe, controlled removal of concrete structures, walls, and building elements. We use cutting, breaking, and removal techniques that minimize dust, noise, and impact on surrounding areas.',
    icon: 'Hammer',
    useCases: [
      'Wall removal and openings',
      'Slab cutting and removal',
      'Staircase demolition',
      'Column and beam removal',
      'Partition wall demolition',
      'Renovation and remodeling projects',
    ],
    benefits: [
      'Controlled demolition techniques',
      'Minimal dust and debris',
      'Safe for occupied buildings',
      'Debris removal included',
      'Structural integrity preserved',
    ],
    image: '/images/gallery/photo_11.jpg',
    galleryImages: ['/images/gallery/photo_11.jpg'],
  },
  {
    id: 'waterproofing',
    name: 'Waterproofing',
    shortDescription: 'Complete waterproofing solutions for roofs, basements, and walls.',
    description:
      'We provide comprehensive waterproofing services to protect your property from water damage. Our solutions include terrace waterproofing, basement waterproofing, bathroom waterproofing, and external wall treatments using premium materials.',
    icon: 'Droplets',
    useCases: [
      'Terrace and roof waterproofing',
      'Basement and foundation sealing',
      'Bathroom and wet area protection',
      'Water tank waterproofing',
      'Swimming pool waterproofing',
      'External wall treatments',
    ],
    benefits: [
      'Long-lasting protection (10+ years)',
      'Premium waterproofing materials',
      'Complete leak prevention',
      'UV resistant coatings',
      'Warranty on workmanship',
    ],
    image: '/images/gallery/photo_2.jpg',
    galleryImages: ['/images/gallery/photo_2.jpg', '/images/gallery/photo_3.jpg'],
  },
];

// Service areas from site config
export const serviceAreas = [
  'Kharar',
  'Mohali',
  'Chandigarh',
  'Panchkula',
  'Zirakpur',
  'Dera Bassi',
  'Kurali',
  'Landran',
  'Baltana',
  'Mullanpur',
  'New Chandigarh',
  'Rajpura',
];

// Industries served - from real invoices
export const industriesServed = [
  'Textile Plants',
  'Manufacturing Units',
  'Industrial Parks',
  'Warehouses',
  'Commercial Buildings',
  'Residential Complexes',
  'Hospitals & Healthcare',
  'Educational Institutions',
  'Hotels & Restaurants',
  'IT Parks',
];

// Work methodology - from real execution process
export const workMethodology = [
  {
    step: 1,
    title: 'Site Inspection',
    description: 'Thorough site visit and assessment before execution',
  },
  {
    step: 2,
    title: 'Accurate Marking',
    description: 'Precise marking and measurement as per requirements',
  },
  {
    step: 3,
    title: 'Equipment Setup',
    description: 'Low-vibration diamond core machines setup',
  },
  {
    step: 4,
    title: 'Clean Execution',
    description: 'Clean cutting with minimum dust and debris',
  },
  {
    step: 5,
    title: 'Quality Check',
    description: 'Final inspection and quality verification',
  },
  {
    step: 6,
    title: 'Site Cleanup',
    description: 'Complete cleanup and handover',
  },
];

// Business compliance details
export const businessCompliance = {
  gstRegistered: true,
  hsnSac: '995419',
  billingSupport: ['Work Orders', 'Invoices', 'Quotations'],
  taxSupport: ['CGST', 'SGST', 'IGST'],
  paymentPlans: ['Construction Linked Payment Plan (CLPP)', 'Milestone Based', 'On Completion'],
};

// SEO keywords for services
export const serviceKeywords = [
  'Core cutting services in Kharar',
  'RCC core cutting Mohali',
  'Chemical rebaring services Punjab',
  'Concrete cutting contractor near me',
  'Industrial core cutting services',
  'Chimney hole cutting Chandigarh',
  'Waterproofing services Tricity',
  'Dismantling work Kharar',
];
