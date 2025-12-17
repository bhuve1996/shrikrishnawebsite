export interface Service {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  icon: string;
  useCases: string[];
  benefits: string[];
  image: string;
}

export const services: Service[] = [
  {
    id: 'core-cutting',
    name: 'Core Cutting',
    shortDescription:
      'Precision diamond core cutting for concrete, RCC, and masonry structures.',
    description:
      'Our professional core cutting services use state-of-the-art diamond core drilling equipment to create precise circular openings in concrete, reinforced concrete (RCC), brick, and stone structures. We ensure clean, accurate cuts with minimal vibration and no structural damage.',
    icon: 'CircleDot',
    useCases: [
      'AC pipe and duct holes',
      'Plumbing and drainage passages',
      'Electrical conduit openings',
      'Ventilation system installations',
      'Sampling for concrete testing',
      'Anchor bolt installations',
    ],
    benefits: [
      'Dust-free operation with wet cutting',
      'No structural damage or cracks',
      'Precise diameter control (25mm to 500mm)',
      'Minimal noise and vibration',
      'Fast and efficient execution',
    ],
    image: '/images/services/core-cutting.jpg',
  },
  {
    id: 'rebaring',
    name: 'Rebaring',
    shortDescription:
      'Expert rebar installation and reinforcement strengthening services.',
    description:
      'Our rebaring services involve drilling holes in existing concrete structures and installing steel reinforcement bars (rebar) with high-strength epoxy or grout. This technique is essential for structural strengthening, extensions, and connecting new construction to existing structures.',
    icon: 'Layers',
    useCases: [
      'Structural strengthening',
      'Building extensions and additions',
      'Bridge and flyover repairs',
      'Seismic retrofitting',
      'Connecting new slabs to existing structures',
      'Foundation reinforcement',
    ],
    benefits: [
      'High-strength chemical anchoring',
      'Certified installation procedures',
      'Non-destructive to existing structure',
      'Long-lasting durability',
      'Suitable for all concrete types',
    ],
    image: '/images/services/rebaring.jpg',
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
    image: '/images/services/chimney-cutting.jpg',
  },
  {
    id: 'concrete-drilling',
    name: 'Concrete Drilling',
    shortDescription:
      'Heavy-duty drilling for anchors, bolts, and deep penetrations.',
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
    image: '/images/services/concrete-drilling.jpg',
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
    image: '/images/services/dismantling.jpg',
  },
  {
    id: 'waterproofing',
    name: 'Waterproofing',
    shortDescription:
      'Complete waterproofing solutions for roofs, basements, and walls.',
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
    image: '/images/services/waterproofing.jpg',
  },
];

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

