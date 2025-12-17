'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle, Home, Phone, MessageCircle } from 'lucide-react';
import { Section, Button, Card } from '@/components/ui';
import { businessInfo, socialLinks } from '@/config/site.config';

export default function ThankYouPage() {
  return (
    <Section background="light" padding="xl" className="min-h-screen flex items-center">
      <div className="max-w-lg mx-auto text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8"
        >
          <CheckCircle className="w-12 h-12 text-green-600" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">
            Thank You!
          </h1>
          <p className="text-lg text-neutral-600 mb-8">
            Your enquiry has been received successfully. Our team will contact you 
            within 30 minutes during business hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card variant="elevated" className="mb-8">
            <h3 className="font-semibold text-neutral-900 mb-4">
              Need Immediate Assistance?
            </h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                variant="primary"
                leftIcon={<Phone className="w-4 h-4" />}
                onClick={() => window.open(socialLinks.phone, '_self')}
              >
                {businessInfo.phoneDisplay}
              </Button>
              <Button
                variant="whatsapp"
                leftIcon={<MessageCircle className="w-4 h-4" />}
                onClick={() => window.open(socialLinks.whatsapp, '_blank')}
              >
                WhatsApp
              </Button>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link href="/">
            <Button variant="outline" leftIcon={<Home className="w-4 h-4" />}>
              Back to Home
            </Button>
          </Link>
        </motion.div>
      </div>
    </Section>
  );
}

