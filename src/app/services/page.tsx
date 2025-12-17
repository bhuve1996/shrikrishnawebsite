'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
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
  FlaskConical,
  Ruler,
  Factory,
  Shield,
  FileText,
} from 'lucide-react';
import { Section, Card, Button, Badge, SectionHeader } from '@/components/ui';
import { CTABanner } from '@/components/sections';
import {
  services,
  industriesServed,
  workMethodology,
  businessCompliance,
} from '@/config/services.config';
import { socialLinks, businessInfo } from '@/config/site.config';
import { pageSEO } from '@/config/seo.config';

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
      <section className="from-primary-600 via-primary-700 to-primary-800 relative bg-gradient-to-br pt-32 pb-20">
        <div className="absolute inset-0 bg-[url('/images/listing-main.png')] bg-cover bg-center opacity-10" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <Badge variant="secondary" className="mb-4">
              Professional Services
            </Badge>
            <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl">
              {pageSEO.services.title}
            </h1>
            <p className="text-xl text-white/90">{pageSEO.services.description}</p>
            <div className="mt-8 flex flex-wrap gap-4">
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
                WhatsApp Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Navigation */}
      <Section background="light" padding="md">
        <div className="flex flex-wrap justify-center gap-3">
          {services.map((service) => (
            <Link key={service.id} href={`#${service.id}`}>
              <Badge
                variant="default"
                className="hover:bg-primary-100 hover:text-primary-700 cursor-pointer px-4 py-2 transition-all"
              >
                {service.name}
              </Badge>
            </Link>
          ))}
        </div>
      </Section>

      {/* Services List */}
      <Section background="white" padding="xl">
        <div className="space-y-24">
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
                  className={`grid items-start gap-12 lg:grid-cols-2 ${
                    isEven ? '' : 'lg:grid-flow-dense'
                  }`}
                >
                  {/* Content */}
                  <div className={isEven ? '' : 'lg:col-start-2'}>
                    <div className="mb-4 flex items-center gap-4">
                      <div className="bg-primary-100 flex h-14 w-14 items-center justify-center rounded-xl">
                        <Icon className="text-primary-600 h-7 w-7" />
                      </div>
                      <h2 className="text-3xl font-bold text-neutral-900">{service.name}</h2>
                    </div>

                    <p className="mb-6 text-lg leading-relaxed text-neutral-600">
                      {service.description}
                    </p>

                    {/* Specifications */}
                    {service.specifications && service.specifications.length > 0 && (
                      <div className="mb-6">
                        <h3 className="mb-3 flex items-center gap-2 font-semibold text-neutral-900">
                          <Ruler className="text-primary-500 h-5 w-5" />
                          Technical Specifications:
                        </h3>
                        <div className="grid gap-2 sm:grid-cols-2">
                          {service.specifications.map((spec, i) => (
                            <div
                              key={i}
                              className="rounded-lg border border-neutral-100 bg-neutral-50 px-4 py-3"
                            >
                              <div className="text-xs font-medium tracking-wide text-neutral-500 uppercase">
                                {spec.label}
                              </div>
                              <div className="mt-1 font-semibold text-neutral-900">
                                {spec.value}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Chemicals Used */}
                    {service.chemicals && service.chemicals.length > 0 && (
                      <div className="mb-6">
                        <h3 className="mb-3 flex items-center gap-2 font-semibold text-neutral-900">
                          <FlaskConical className="text-accent-500 h-5 w-5" />
                          Approved Chemicals Used:
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {service.chemicals.map((chemical, i) => (
                            <Badge key={i} variant="primary" size="sm">
                              {chemical}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Use Cases */}
                    <div className="mb-6">
                      <h3 className="mb-3 font-semibold text-neutral-900">Common Applications:</h3>
                      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {service.useCases.map((useCase, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle className="text-accent-500 h-4 w-4 flex-shrink-0" />
                            <span className="text-sm text-neutral-600">{useCase}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h3 className="mb-3 font-semibold text-neutral-900">
                        Why Choose Our {service.name}:
                      </h3>
                      <div className="space-y-2">
                        {service.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <ArrowRight className="text-primary-500 h-4 w-4 flex-shrink-0" />
                            <span className="text-sm text-neutral-600">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-wrap gap-3">
                      <Button
                        variant="primary"
                        leftIcon={<Phone className="h-4 w-4" />}
                        onClick={() => window.open(socialLinks.phone, '_self')}
                      >
                        Get Quote
                      </Button>
                      <Button
                        variant="whatsapp"
                        leftIcon={<MessageCircle className="h-4 w-4" />}
                        onClick={() =>
                          window.open(
                            `https://wa.me/${businessInfo.whatsapp.replace('+', '')}?text=Hi, I'm interested in your ${service.name} service.`,
                            '_blank'
                          )
                        }
                      >
                        WhatsApp
                      </Button>
                    </div>
                  </div>

                  {/* Image Gallery */}
                  <div className={isEven ? '' : 'lg:col-start-1'}>
                    <div className="space-y-4">
                      {/* Main Image */}
                      <Card variant="elevated" padding="none" className="overflow-hidden">
                        <div className="relative aspect-[4/3]">
                          <Image
                            src={service.image}
                            alt={service.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                          <div className="absolute right-4 bottom-4 left-4">
                            <Badge variant="secondary">{service.name}</Badge>
                          </div>
                        </div>
                      </Card>

                      {/* Gallery Thumbnails */}
                      {service.galleryImages && service.galleryImages.length > 1 && (
                        <div className="grid grid-cols-3 gap-2">
                          {service.galleryImages.slice(0, 3).map((img, i) => (
                            <div
                              key={i}
                              className="relative aspect-square overflow-hidden rounded-lg"
                            >
                              <Image
                                src={img}
                                alt={`${service.name} - ${i + 1}`}
                                fill
                                className="object-cover transition-transform hover:scale-105"
                                sizes="(max-width: 768px) 33vw, 16vw"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Divider */}
                {index < services.length - 1 && (
                  <div className="mt-16 border-b border-neutral-200" />
                )}
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* Work Methodology */}
      <Section background="light" padding="xl">
        <SectionHeader
          title="Our Work Methodology"
          subtitle="Professional, systematic approach to every project"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {workMethodology.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card variant="elevated" className="h-full">
                <div className="flex items-start gap-4">
                  <div className="bg-primary-500 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-lg font-bold text-white">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-neutral-900">{item.title}</h3>
                    <p className="text-sm text-neutral-600">{item.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Industries Served */}
      <Section background="white" padding="xl">
        <SectionHeader
          title="Industries We Serve"
          subtitle="Trusted by businesses across multiple sectors"
        />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {industriesServed.map((industry, index) => (
            <motion.div
              key={industry}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center gap-2 rounded-lg border border-neutral-100 bg-neutral-50 px-4 py-3"
            >
              <Factory className="text-primary-500 h-5 w-5 flex-shrink-0" />
              <span className="text-sm font-medium text-neutral-700">{industry}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Business Compliance */}
      <Section background="light" padding="lg">
        <div className="mx-auto max-w-4xl">
          <Card variant="elevated" className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
            </div>
            <h3 className="mb-2 text-xl font-bold text-neutral-900">Fully Compliant Business</h3>
            <p className="mb-6 text-neutral-600">
              We are a GST registered company with proper billing and documentation for all
              projects.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 rounded-lg bg-neutral-50 px-4 py-2">
                <FileText className="text-primary-500 h-5 w-5" />
                <span className="text-sm font-medium">HSN/SAC: {businessCompliance.hsnSac}</span>
              </div>
              {businessCompliance.billingSupport.map((doc) => (
                <Badge key={doc} variant="success">
                  {doc}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
