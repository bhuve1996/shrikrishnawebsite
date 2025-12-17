'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CircleDot, Layers, Wind, Target, Hammer, Droplets } from 'lucide-react';
import { Section, SectionHeader, Card, Button } from '@/components/ui';
import { services } from '@/config/services.config';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  CircleDot,
  Layers,
  Wind,
  Target,
  Hammer,
  Droplets,
};

export function ServicesOverview() {
  return (
    <Section id="services" background="light" padding="xl">
      <SectionHeader
        title="Our Services"
        subtitle="Comprehensive concrete cutting and construction solutions tailored to your needs"
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = iconMap[service.icon] || CircleDot;

          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card hover className="flex h-full flex-col">
                <div className="bg-primary-100 mb-4 flex h-14 w-14 items-center justify-center rounded-xl">
                  <Icon className="text-primary-500 h-7 w-7" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-neutral-900">{service.name}</h3>
                <p className="mb-4 flex-grow text-sm text-neutral-600">
                  {service.shortDescription}
                </p>
                <Link
                  href={`/services#${service.id}`}
                  className="text-primary-500 hover:text-primary-600 group inline-flex items-center gap-2 text-sm font-medium transition-colors"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-12 text-center"
      >
        <Link href="/services">
          <Button variant="primary" size="lg" rightIcon={<ArrowRight className="h-5 w-5" />}>
            View All Services
          </Button>
        </Link>
      </motion.div>
    </Section>
  );
}
