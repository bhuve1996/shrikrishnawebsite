'use client';

import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { Section, SectionHeader, Button } from '@/components/ui';
import { serviceAreas } from '@/config/services.config';
import { serviceAreasSection } from '@/config/site.config';
import Link from 'next/link';

export function ServiceAreas() {
  return (
    <Section id="areas" background="light" padding="lg">
      <SectionHeader title={serviceAreasSection.title} subtitle={serviceAreasSection.subtitle} />

      {/* Areas Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto mb-8 flex max-w-4xl flex-wrap justify-center gap-3"
      >
        {serviceAreas.map((area, index) => (
          <motion.div
            key={area}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.03 }}
            className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 shadow-sm"
          >
            <MapPin className="text-primary-500 h-4 w-4 flex-shrink-0" />
            <span className="text-sm font-medium text-neutral-700">{area}</span>
          </motion.div>
        ))}
      </motion.div>

      <p className="mb-6 text-center text-sm text-neutral-500">
        {serviceAreasSection.notInListText}
      </p>

      <div className="text-center">
        <Link href="/contact">
          <Button variant="primary" rightIcon={<ArrowRight className="h-5 w-5" />}>
            {serviceAreasSection.ctaText}
          </Button>
        </Link>
      </div>
    </Section>
  );
}
