'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, Phone, MessageCircle } from 'lucide-react';
import { Section, Badge, Card, Button } from '@/components/ui';
import { CTABanner } from '@/components/sections';
import { faqItems } from '@/config/contact.config';
import { socialLinks, businessInfo } from '@/config/site.config';
import { generateFAQSchema } from '@/config/seo.config';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = faqItems.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(faqItems)),
        }}
      />

      {/* Hero Section */}
      <section className="from-primary-500 via-primary-600 to-primary-700 bg-gradient-to-br pt-40 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <Badge variant="secondary" className="mb-4">
              Help Center
            </Badge>
            <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-white/80">
              Find answers to common questions about our core cutting, rebaring, and concrete
              services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <Section background="white" padding="xl">
        <div className="mx-auto max-w-3xl">
          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="relative">
              <Search className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-neutral-400" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="focus:ring-primary-500 w-full rounded-xl border border-neutral-200 py-4 pr-4 pl-12 focus:border-transparent focus:ring-2 focus:outline-none"
              />
            </div>
          </motion.div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card variant="outlined" padding="none" className="overflow-hidden">
                  <button
                    className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-neutral-50"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <span className="pr-4 font-semibold text-neutral-900">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="h-5 w-5 flex-shrink-0 text-neutral-500" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-6 pb-5 text-neutral-600">{faq.answer}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Empty state */}
          {filteredFaqs.length === 0 && (
            <div className="py-12 text-center">
              <p className="mb-4 text-neutral-500">No questions found matching your search.</p>
              <Button variant="outline" onClick={() => setSearchQuery('')}>
                Clear Search
              </Button>
            </div>
          )}

          {/* Still have questions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Card variant="elevated" className="bg-primary-50 border-primary-100">
              <div className="text-center">
                <h3 className="mb-2 text-xl font-bold text-neutral-900">Still Have Questions?</h3>
                <p className="mb-6 text-neutral-600">
                  Can&apos;t find the answer you&apos;re looking for? Contact us directly.
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                  <Button
                    variant="primary"
                    leftIcon={<Phone className="h-4 w-4" />}
                    onClick={() => window.open(socialLinks.phone, '_self')}
                  >
                    Call: {businessInfo.phoneDisplay}
                  </Button>
                  <Button
                    variant="whatsapp"
                    leftIcon={<MessageCircle className="h-4 w-4" />}
                    onClick={() => window.open(socialLinks.whatsapp, '_blank')}
                  >
                    WhatsApp Us
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
