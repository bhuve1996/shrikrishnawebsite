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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <Card hover className="h-full flex flex-col">
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-primary-500" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  {service.name}
                </h3>
                <p className="text-neutral-600 text-sm mb-4 flex-grow">
                  {service.shortDescription}
                </p>
                <Link
                  href={`/services#${service.id}`}
                  className="inline-flex items-center gap-2 text-primary-500 font-medium text-sm hover:text-primary-600 transition-colors group"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
        className="text-center mt-12"
      >
        <Link href="/services">
          <Button variant="primary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
            View All Services
          </Button>
        </Link>
      </motion.div>
    </Section>
  );
}

