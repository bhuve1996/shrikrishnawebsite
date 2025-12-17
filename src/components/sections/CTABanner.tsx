'use client';

import { motion } from 'framer-motion';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { Section, Button } from '@/components/ui';
import { businessInfo, socialLinks } from '@/config/site.config';
import Link from 'next/link';

export function CTABanner() {
  return (
    <Section background="gradient" padding="xl" container={false}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Ready to Start Your Project?
          </h2>
          <p className="mb-8 text-lg text-white/80">
            Get a free estimate for your core cutting, rebaring, or any concrete work. We respond
            within minutes!
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              variant="secondary"
              size="lg"
              leftIcon={<Phone className="h-5 w-5" />}
              onClick={() => window.open(socialLinks.phone, '_self')}
            >
              Call: {businessInfo.phoneDisplay}
            </Button>
            <Button
              variant="whatsapp"
              size="lg"
              leftIcon={<MessageCircle className="h-5 w-5" />}
              onClick={() => window.open(socialLinks.whatsapp, '_blank')}
            >
              WhatsApp for Quick Quote
            </Button>
          </div>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-white/70 transition-colors hover:text-white"
            >
              Or fill out our contact form
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
