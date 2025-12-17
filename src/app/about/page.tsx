'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Target,
  Award,
  Clock,
  Shield,
  Heart,
  MapPin,
} from 'lucide-react';
import { Section, SectionHeader, Card, Badge } from '@/components/ui';
import { CTABanner } from '@/components/sections';
import { businessInfo } from '@/config/site.config';
import { serviceAreas } from '@/config/services.config';

const values = [
  {
    icon: Target,
    title: 'Precision',
    description: 'We deliver accurate, clean cuts every time using state-of-the-art equipment.',
  },
  {
    icon: Shield,
    title: 'Safety',
    description: 'Safety is our top priority. We follow strict protocols on every project.',
  },
  {
    icon: Clock,
    title: 'Reliability',
    description: 'We show up on time, complete work efficiently, and meet our commitments.',
  },
  {
    icon: Heart,
    title: 'Customer Focus',
    description: 'Your satisfaction drives us. We go above and beyond to exceed expectations.',
  },
];

const milestones = [
  { year: '2020', event: 'Founded Shri Krishna Core Cutting and Rebaring' },
  { year: '2021', event: 'Expanded services to Chandigarh and Panchkula' },
  { year: '2022', event: 'Completed 200+ projects with 5-star ratings' },
  { year: '2023', event: 'Added waterproofing and dismantling services' },
  { year: '2024', event: 'Serving 70+ satisfied customers across Tricity' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 pt-32 pb-20 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/gallery/photo_9.jpg"
            alt="Our work"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <Badge variant="secondary" className="mb-4">
              About Us
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Your Trusted Partner for Core Cutting Solutions
            </h1>
            <p className="text-xl text-white/80">
              Since 2020, we have been providing professional core cutting, rebaring, 
              and concrete drilling services to homeowners and contractors across the Tricity region.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <Section background="white" padding="xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-neutral-600">
              <p>
                Shri Krishna Core Cutting and Rebaring was founded with a simple mission: 
                to provide reliable, professional, and affordable concrete cutting services 
                to the people of Kharar and the surrounding Tricity area.
              </p>
              <p>
                What started as a small operation has grown into a trusted name in the 
                construction industry. Our commitment to quality workmanship, safety, and 
                customer satisfaction has earned us the trust of over 70 satisfied customers 
                and a perfect 5-star rating on Google.
              </p>
              <p>
                We take pride in our work and treat every project, big or small, with the 
                same level of professionalism and dedication. From a simple AC hole to 
                complex structural modifications, we bring expertise and precision to 
                every job.
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
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/gallery/photo_1.jpg"
                  alt="Core cutting work"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/gallery/photo_5.jpg"
                  alt="Industrial drilling"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Stats Card */}
            <Card variant="elevated" className="bg-primary-500 text-white p-6">
              <div className="flex items-center gap-4 mb-4">
                <Award className="w-10 h-10 text-accent-400" />
                <div>
                  <p className="text-2xl font-bold">5.0 ★</p>
                  <p className="text-primary-100 text-sm">Google Rating</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-2xl font-bold">{businessInfo.yearsInBusiness}+</p>
                  <p className="text-primary-100 text-xs">Years Experience</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">{businessInfo.projectsCompleted}+</p>
                  <p className="text-primary-100 text-xs">Projects Done</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">{businessInfo.reviewCount}+</p>
                  <p className="text-primary-100 text-xs">Happy Customers</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">12+</p>
                  <p className="text-primary-100 text-xs">Areas Served</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Values Section */}
      <Section background="light" padding="xl">
        <SectionHeader
          title="Our Values"
          subtitle="The principles that guide everything we do"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-accent-600" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-neutral-600 text-sm">{value.description}</p>
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 6, 7, 8, 9].map((num) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-xl overflow-hidden shadow-lg group"
            >
              <Image
                src={`/images/gallery/photo_${num}.jpg`}
                alt={`Project ${num}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/40 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Timeline Section */}
      <Section background="light" padding="xl">
        <SectionHeader
          title="Our Journey"
          subtitle="Key milestones in our growth story"
        />

        <div className="max-w-2xl mx-auto">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-4 mb-8 last:mb-0"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {milestone.year}
                </div>
                {index < milestones.length - 1 && (
                  <div className="w-0.5 h-full bg-primary-200 mt-2" />
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
        <SectionHeader
          title="Where We Work"
          subtitle="Serving the Tricity region and beyond"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3"
        >
          {serviceAreas.map((area) => (
            <Badge
              key={area}
              variant="primary"
              size="md"
              className="flex items-center gap-1"
            >
              <MapPin className="w-3 h-3" />
              {area}
            </Badge>
          ))}
        </motion.div>
      </Section>

      <CTABanner />
    </>
  );
}
