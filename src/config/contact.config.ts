import { businessInfo } from './site.config';

export const contactConfig = {
  formFields: [
    {
      name: 'name',
      label: 'Your Name',
      type: 'text',
      placeholder: 'Enter your full name',
      required: true,
    },
    {
      name: 'phone',
      label: 'Phone Number',
      type: 'tel',
      placeholder: 'Enter your phone number',
      required: true,
    },
    {
      name: 'email',
      label: 'Email Address',
      type: 'email',
      placeholder: 'Enter your email (optional)',
      required: false,
    },
    {
      name: 'service',
      label: 'Service Required',
      type: 'select',
      placeholder: 'Select a service',
      required: true,
      options: [
        { value: 'core-cutting', label: 'Core Cutting' },
        { value: 'rebaring', label: 'Rebaring' },
        { value: 'chimney-hole-cutting', label: 'Chimney Hole Cutting' },
        { value: 'concrete-drilling', label: 'Concrete Drilling' },
        { value: 'dismantling', label: 'Dismantling Work' },
        { value: 'waterproofing', label: 'Waterproofing' },
        { value: 'other', label: 'Other' },
      ],
    },
    {
      name: 'message',
      label: 'Your Message',
      type: 'textarea',
      placeholder: 'Describe your requirements...',
      required: false,
    },
  ],

  successMessage: {
    title: 'Thank You!',
    description:
      'Your enquiry has been submitted successfully. We will contact you shortly.',
  },

  mapConfig: {
    center: {
      lat: businessInfo.coordinates.latitude,
      lng: businessInfo.coordinates.longitude,
    },
    zoom: 15,
    embedUrl: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.5!2d${businessInfo.coordinates.longitude}!3d${businessInfo.coordinates.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ffbe5f78bfc43%3A0x902e798f0cd0ff42!2sShri%20Krishna%20Core%20Cutting%20and%20Rebaring!5e0!3m2!1sen!2sin!4v1702831550000!5m2!1sen!2sin`,
  },
};

export const faqItems = [
  {
    question: 'What is core cutting and why is it needed?',
    answer:
      'Core cutting is a precise drilling technique used to create circular openings in concrete, RCC, or masonry structures. It is needed for installing AC pipes, plumbing lines, electrical conduits, ventilation ducts, and various other utilities without damaging the surrounding structure.',
  },
  {
    question: 'How long does a typical core cutting job take?',
    answer:
      'The duration depends on the size and number of holes required, as well as the thickness and type of concrete. A single hole for an AC pipe typically takes 15-30 minutes, while larger or multiple holes may take a few hours. We provide time estimates during our site visit.',
  },
  {
    question: 'Is core cutting safe for my building structure?',
    answer:
      'Yes, professional core cutting is completely safe. We use diamond-tipped core bits that cut cleanly without causing vibrations or cracks. Our team assesses the structure before cutting and avoids reinforcement bars when necessary.',
  },
  {
    question: 'What sizes of holes can you cut?',
    answer:
      'We can cut holes ranging from 25mm (1 inch) to 500mm (20 inches) in diameter. Common sizes for AC installations are 75mm to 100mm, while larger holes are used for ducting and plumbing.',
  },
  {
    question: 'Do you provide services on weekends?',
    answer:
      'Yes, we provide services all seven days of the week. We understand that some projects require work during weekends to minimize disruption, and we accommodate such requests.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We serve Kharar, Mohali, Chandigarh, Panchkula, Zirakpur, Dera Bassi, and surrounding areas in the Tricity region. For locations outside these areas, please contact us to check availability.',
  },
  {
    question: 'How much does core cutting cost?',
    answer:
      'Pricing depends on the hole diameter, thickness of concrete, number of holes, and site conditions. We offer competitive rates and provide free quotes after understanding your requirements. Contact us for a detailed estimate.',
  },
  {
    question: 'Do you clean up after the work is done?',
    answer:
      'Yes, we ensure complete cleanup after our work. Our wet cutting process minimizes dust, and we remove all debris and slurry, leaving your site clean and ready for the next phase of your project.',
  },
  {
    question: 'What is rebaring and when is it required?',
    answer:
      'Rebaring (or rebar installation) involves drilling holes in existing concrete and installing steel reinforcement bars with chemical anchoring. It is required when extending buildings, strengthening structures, or connecting new construction to existing concrete.',
  },
  {
    question: 'How can I get a quote for my project?',
    answer:
      'You can get a free quote by calling us, sending a WhatsApp message, or filling out the contact form on our website. For accurate estimates, we may request photos or schedule a site visit.',
  },
];

