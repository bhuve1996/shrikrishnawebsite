'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui';
import { businessInfo, socialLinks } from '@/config/site.config';

export function Hero() {
  const highlights = ['5.0 ★ Rating', '70+ Happy Customers', 'Free Estimates'];

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/gallery/photo_5.jpg"
          alt="Core cutting work in progress"
          fill
          className="object-cover"
          priority
          quality={85}
        />
        {/* Overlay gradient */}
        <div className="from-primary-900/95 via-primary-800/90 to-primary-700/80 absolute inset-0 bg-gradient-to-r" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Decorative circles */}
      <div className="bg-accent-400/20 absolute top-20 right-20 h-64 w-64 rounded-full blur-3xl" />
      <div className="bg-accent-500/10 absolute bottom-20 left-20 h-96 w-96 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl pt-20">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm"
          >
            <Star className="text-accent-400 fill-accent-400 h-4 w-4" />
            <span className="text-sm font-medium text-white/90">
              Trusted by 70+ Customers in Tricity
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-4xl leading-tight font-bold text-white sm:text-5xl lg:text-6xl"
          >
            Professional <span className="text-accent-400">Core Cutting</span> &{' '}
            <span className="text-accent-400">Rebaring</span> Services
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 max-w-2xl text-lg text-white/80 sm:text-xl"
          >
            Expert concrete cutting, drilling, and reinforcement solutions for residential and
            commercial projects in Kharar, Mohali, Chandigarh & surrounding areas.
          </motion.p>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-10 flex flex-wrap gap-4"
          >
            {highlights.map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-white/90">
                <CheckCircle className="text-accent-400 h-5 w-5" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Button
              variant="secondary"
              size="lg"
              leftIcon={<Phone className="h-5 w-5" />}
              onClick={() => window.open(socialLinks.phone, '_self')}
            >
              Call Now: {businessInfo.phoneDisplay}
            </Button>
            <Button
              variant="whatsapp"
              size="lg"
              leftIcon={<MessageCircle className="h-5 w-5" />}
              onClick={() => window.open(socialLinks.whatsapp, '_blank')}
            >
              Get Free Quote on WhatsApp
            </Button>
          </motion.div>

          {/* Service areas */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 text-sm text-white/60"
          >
            Serving: Kharar • Mohali • Chandigarh • Panchkula • Zirakpur • Dera Bassi
          </motion.p>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex h-10 w-6 justify-center rounded-full border-2 border-white/30 pt-2"
        >
          <div className="h-2 w-1 rounded-full bg-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
