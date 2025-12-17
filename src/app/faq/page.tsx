'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, Phone, MessageCircle } from 'lucide-react';
import { Section, Badge, Card, Button, Input } from '@/components/ui';
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
      <section className="bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <Badge variant="secondary" className="mb-4">
              Help Center
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-white/80">
              Find answers to common questions about our core cutting, rebaring, 
              and concrete services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <Section background="white" padding="xl">
        <div className="max-w-3xl mx-auto">
          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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
                <Card
                  variant="outlined"
                  padding="none"
                  className="overflow-hidden"
                >
                  <button
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-neutral-50 transition-colors"
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                  >
                    <span className="font-semibold text-neutral-900 pr-4">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-5 h-5 text-neutral-500 flex-shrink-0" />
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
                        <div className="px-6 pb-5 text-neutral-600">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Empty state */}
          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-neutral-500 mb-4">
                No questions found matching your search.
              </p>
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
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  Still Have Questions?
                </h3>
                <p className="text-neutral-600 mb-6">
                  Can&apos;t find the answer you&apos;re looking for? Contact us directly.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button
                    variant="primary"
                    leftIcon={<Phone className="w-4 h-4" />}
                    onClick={() => window.open(socialLinks.phone, '_self')}
                  >
                    Call: {businessInfo.phoneDisplay}
                  </Button>
                  <Button
                    variant="whatsapp"
                    leftIcon={<MessageCircle className="w-4 h-4" />}
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

