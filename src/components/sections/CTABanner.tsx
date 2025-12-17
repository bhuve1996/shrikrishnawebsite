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
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Get a free estimate for your core cutting, rebaring, or any concrete work. 
            We respond within minutes!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              variant="secondary"
              size="lg"
              leftIcon={<Phone className="w-5 h-5" />}
              onClick={() => window.open(socialLinks.phone, '_self')}
            >
              Call: {businessInfo.phoneDisplay}
            </Button>
            <Button
              variant="whatsapp"
              size="lg"
              leftIcon={<MessageCircle className="w-5 h-5" />}
              onClick={() => window.open(socialLinks.whatsapp, '_blank')}
            >
              WhatsApp for Quick Quote
            </Button>
          </div>

          <div className="mt-8">
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors"
            >
              Or fill out our contact form
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

