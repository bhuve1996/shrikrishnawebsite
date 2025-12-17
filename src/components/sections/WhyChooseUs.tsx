'use client';

import { motion } from 'framer-motion';
import { Award, Clock, Shield, ThumbsUp, Wrench, BadgeCheck } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui';
import { businessInfo } from '@/config/site.config';

const features = [
  {
    icon: Award,
    title: 'Expert Technicians',
    description:
      'Highly skilled professionals with years of experience in precision cutting and drilling.',
  },
  {
    icon: Clock,
    title: 'Quick Response',
    description: 'Same-day service available. We arrive on time and complete work efficiently.',
  },
  {
    icon: Shield,
    title: 'Safety First',
    description: 'We follow strict safety protocols and use professional-grade equipment.',
  },
  {
    icon: ThumbsUp,
    title: '5-Star Rated',
    description: `${businessInfo.reviewCount}+ happy customers with a perfect 5.0 rating on Google.`,
  },
  {
    icon: Wrench,
    title: 'Modern Equipment',
    description: 'State-of-the-art diamond core drilling machines for clean, precise cuts.',
  },
  {
    icon: BadgeCheck,
    title: 'Quality Guarantee',
    description: 'We stand behind our work with quality assurance on all projects.',
  },
];

const stats = [
  { value: '4+', label: 'Years Experience' },
  { value: '500+', label: 'Projects Done' },
  { value: '70+', label: 'Happy Clients' },
  { value: '5.0', label: 'Star Rating' },
];

export function WhyChooseUs() {
  return (
    <Section id="why-us" background="white" padding="xl">
      <SectionHeader
        title="Why Choose Us"
        subtitle="Trusted by homeowners and contractors across the Tricity region"
      />

      {/* Features Grid */}
      <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-4"
            >
              <div className="bg-accent-100 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg">
                <Icon className="text-accent-600 h-6 w-6" />
              </div>
              <div>
                <h3 className="mb-1 text-lg font-semibold text-neutral-900">{feature.title}</h3>
                <p className="text-sm text-neutral-600">{feature.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="from-primary-500 to-primary-600 rounded-2xl bg-gradient-to-r p-8 md:p-12"
      >
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mb-2 text-4xl font-bold text-white md:text-5xl">{stat.value}</div>
              <div className="text-primary-100 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
