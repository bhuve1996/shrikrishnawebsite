'use client';

import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { Section, SectionHeader, Button } from '@/components/ui';
import { serviceAreas } from '@/config/services.config';
import { businessInfo, socialLinks } from '@/config/site.config';
import Link from 'next/link';

export function ServiceAreas() {
  return (
    <Section id="areas" background="white" padding="xl">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Map Embed */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54870.33308892654!2d${businessInfo.coordinates.longitude - 0.05}!3d${businessInfo.coordinates.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ffbe5f78bfc43%3A0x902e798f0cd0ff42!2sShri%20Krishna%20Core%20Cutting%20and%20Rebaring!5e0!3m2!1sen!2sin!4v1702831550000!5m2!1sen!2sin`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Service Area Map"
            />
          </div>
          {/* Floating card */}
          <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg max-w-[200px]">
            <div className="flex items-center gap-2 text-primary-500 mb-1">
              <MapPin className="w-5 h-5" />
              <span className="font-semibold">Headquarters</span>
            </div>
            <p className="text-sm text-neutral-600">Kharar, Punjab</p>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            Areas We Serve
          </h2>
          <p className="text-neutral-600 mb-8">
            We provide professional core cutting and rebaring services across the Tricity 
            region and surrounding areas. Our team is equipped to handle projects of all 
            sizes throughout Punjab, Haryana, and Chandigarh.
          </p>

          {/* Areas Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
            {serviceAreas.map((area, index) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-center gap-2 bg-neutral-50 px-3 py-2 rounded-lg"
              >
                <MapPin className="w-4 h-4 text-accent-500 flex-shrink-0" />
                <span className="text-sm font-medium text-neutral-700">{area}</span>
              </motion.div>
            ))}
          </div>

          <p className="text-sm text-neutral-500 mb-6">
            Not in the list? Contact us to check if we serve your area.
          </p>

          <Link href="/contact">
            <Button variant="primary" rightIcon={<ArrowRight className="w-5 h-5" />}>
              Get Service in Your Area
            </Button>
          </Link>
        </motion.div>
      </div>
    </Section>
  );
}

