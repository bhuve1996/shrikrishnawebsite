'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui';
import { businessInfo, socialLinks } from '@/config/site.config';

export function Hero() {
  const highlights = [
    '5.0 ★ Rating',
    '70+ Happy Customers',
    'Free Estimates',
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-800/90 to-primary-700/80" />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Decorative circles */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-accent-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl pt-20">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
          >
            <Star className="w-4 h-4 text-accent-400 fill-accent-400" />
            <span className="text-white/90 text-sm font-medium">
              Trusted by 70+ Customers in Tricity
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Professional{' '}
            <span className="text-accent-400">Core Cutting</span> &{' '}
            <span className="text-accent-400">Rebaring</span> Services
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl"
          >
            Expert concrete cutting, drilling, and reinforcement solutions for residential 
            and commercial projects in Kharar, Mohali, Chandigarh & surrounding areas.
          </motion.p>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-white/90"
              >
                <CheckCircle className="w-5 h-5 text-accent-400" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              variant="secondary"
              size="lg"
              leftIcon={<Phone className="w-5 h-5" />}
              onClick={() => window.open(socialLinks.phone, '_self')}
            >
              Call Now: {businessInfo.phoneDisplay}
            </Button>
            <Button
              variant="whatsapp"
              size="lg"
              leftIcon={<MessageCircle className="w-5 h-5" />}
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
            className="mt-10 text-white/60 text-sm"
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
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
