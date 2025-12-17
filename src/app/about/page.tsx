'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Target, Award, Clock, Shield, Heart, MapPin } from 'lucide-react';
import { Section, SectionHeader, Card, Badge } from '@/components/ui';
import { CTABanner } from '@/components/sections';
import { businessInfo, aboutContent, stats } from '@/config/site.config';
import { serviceAreas } from '@/config/services.config';
import { pageSEO } from '@/config/seo.config';

const values = aboutContent.values.map((v, i) => ({
  ...v,
  icon: [Target, Shield, Clock, Heart][i] || Target,
}));

const milestones = [
  { year: `${businessInfo.foundedYear}`, event: `Founded ${businessInfo.name}` },
  {
    year: `${businessInfo.foundedYear + 1}`,
    event: 'Expanded services to Chandigarh and Panchkula',
  },
  {
    year: `${businessInfo.foundedYear + 2}`,
    event: 'Completed 200+ projects with 5-star ratings',
  },
  {
    year: `${businessInfo.foundedYear + 3}`,
    event: 'Added waterproofing and dismantling services',
  },
  {
    year: `${new Date().getFullYear()}`,
    event: `Serving ${businessInfo.reviewCount}+ satisfied customers across Tricity`,
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="from-primary-500 via-primary-600 to-primary-700 relative overflow-hidden bg-gradient-to-br pt-40 pb-20">
        {/* Background image */}
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/gallery/photo_9.jpg" alt="Our work" fill className="object-cover" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <Badge variant="secondary" className="mb-4">
              About Us
            </Badge>
            <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl">{aboutContent.title}</h1>
            <p className="text-xl text-white/80">{aboutContent.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <Section background="white" padding="xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-3xl font-bold text-neutral-900">Our Story</h2>
            <div className="space-y-4 text-neutral-600">
              <p>{aboutContent.description}</p>
              <p>
                <strong>Mission:</strong> {aboutContent.mission}
              </p>
              <p>
                <strong>Vision:</strong> {aboutContent.vision}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Work Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/images/gallery/photo_1.jpg"
                  alt="Core cutting work"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/images/gallery/photo_5.jpg"
                  alt="Industrial drilling"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Stats Card */}
            <Card variant="elevated" className="bg-primary-500 p-6 text-white">
              <div className="mb-4 flex items-center gap-4">
                <Award className="text-accent-400 h-10 w-10" />
                <div>
                  <p className="text-2xl font-bold">{businessInfo.rating} ★</p>
                  <p className="text-primary-100 text-sm">Google Rating</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-primary-100 text-xs">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Values Section */}
      <Section background="light" padding="xl">
        <SectionHeader title="Our Values" subtitle="The principles that guide everything we do" />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card hover className="h-full text-center">
                  <div className="bg-accent-100 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                    <Icon className="text-accent-600 h-8 w-8" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-neutral-900">{value.title}</h3>
                  <p className="text-sm text-neutral-600">{value.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* Work Showcase */}
      <Section background="white" padding="xl">
        <SectionHeader
          title="Our Work in Action"
          subtitle="See our team delivering quality results on real projects"
        />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[1, 2, 3, 4, 6, 7, 8, 9].map((num) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group relative aspect-square overflow-hidden rounded-xl shadow-lg"
            >
              <Image
                src={`/images/gallery/photo_${num}.jpg`}
                alt={`Project ${num}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="bg-primary-900/0 group-hover:bg-primary-900/40 absolute inset-0 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Timeline Section */}
      <Section background="light" padding="xl">
        <SectionHeader title="Our Journey" subtitle="Key milestones in our growth story" />

        <div className="mx-auto max-w-2xl">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-8 flex gap-4 last:mb-0"
            >
              <div className="flex flex-col items-center">
                <div className="bg-primary-500 flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold text-white">
                  {milestone.year}
                </div>
                {index < milestones.length - 1 && (
                  <div className="bg-primary-200 mt-2 h-full w-0.5" />
                )}
              </div>
              <div className="pt-3">
                <p className="text-neutral-700">{milestone.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Service Areas */}
      <Section background="white" padding="xl">
        <SectionHeader title="Where We Work" subtitle="Serving the Tricity region and beyond" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3"
        >
          {serviceAreas.map((area) => (
            <Badge key={area} variant="primary" size="md" className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              {area}
            </Badge>
          ))}
        </motion.div>
      </Section>

      <CTABanner />
    </>
  );
}
