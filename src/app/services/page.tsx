'use client';

import { motion } from 'framer-motion';
import {
  CircleDot,
  Layers,
  Wind,
  Target,
  Hammer,
  Droplets,
  CheckCircle,
  ArrowRight,
  Phone,
  MessageCircle,
} from 'lucide-react';
import { Section, SectionHeader, Card, Button, Badge } from '@/components/ui';
import { CTABanner } from '@/components/sections';
import { services } from '@/config/services.config';
import { businessInfo, socialLinks } from '@/config/site.config';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  CircleDot,
  Layers,
  Wind,
  Target,
  Hammer,
  Droplets,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <Badge variant="secondary" className="mb-4">
              Professional Services
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-white/80">
              Comprehensive concrete cutting and construction solutions for residential
              and commercial projects. Quality workmanship guaranteed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <Section background="white" padding="xl">
        <div className="space-y-16">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || CircleDot;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="scroll-mt-24"
              >
                <div
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    isEven ? '' : 'lg:grid-flow-dense'
                  }`}
                >
                  {/* Content */}
                  <div className={isEven ? '' : 'lg:col-start-2'}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center">
                        <Icon className="w-7 h-7 text-primary-500" />
                      </div>
                      <h2 className="text-3xl font-bold text-neutral-900">
                        {service.name}
                      </h2>
                    </div>

                    <p className="text-neutral-600 mb-6 text-lg">
                      {service.description}
                    </p>

                    {/* Use Cases */}
                    <div className="mb-6">
                      <h3 className="font-semibold text-neutral-900 mb-3">
                        Common Applications:
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.useCases.map((useCase, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-accent-500 flex-shrink-0" />
                            <span className="text-sm text-neutral-600">{useCase}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h3 className="font-semibold text-neutral-900 mb-3">
                        Why Choose Our {service.name}:
                      </h3>
                      <div className="space-y-2">
                        {service.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <ArrowRight className="w-4 h-4 text-primary-500 flex-shrink-0" />
                            <span className="text-sm text-neutral-600">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-wrap gap-3">
                      <Button
                        variant="primary"
                        leftIcon={<Phone className="w-4 h-4" />}
                        onClick={() => window.open(socialLinks.phone, '_self')}
                      >
                        Get Quote
                      </Button>
                      <Button
                        variant="whatsapp"
                        leftIcon={<MessageCircle className="w-4 h-4" />}
                        onClick={() =>
                          window.open(
                            `https://wa.me/917888784324?text=Hi, I'm interested in your ${service.name} service.`,
                            '_blank'
                          )
                        }
                      >
                        WhatsApp
                      </Button>
                    </div>
                  </div>

                  {/* Visual Card */}
                  <div className={isEven ? '' : 'lg:col-start-1'}>
                    <Card
                      variant="elevated"
                      className="bg-gradient-to-br from-neutral-50 to-neutral-100 aspect-[4/3] flex items-center justify-center"
                    >
                      <div className="text-center p-8">
                        <Icon className="w-24 h-24 text-primary-200 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-primary-500">
                          {service.name}
                        </h3>
                        <p className="text-neutral-500 mt-2 text-sm">
                          Professional {service.name.toLowerCase()} services
                        </p>
                      </div>
                    </Card>
                  </div>
                </div>

                {/* Divider */}
                {index < services.length - 1 && (
                  <div className="border-b border-neutral-200 mt-16" />
                )}
              </motion.div>
            );
          })}
        </div>
      </Section>

      <CTABanner />
    </>
  );
}

