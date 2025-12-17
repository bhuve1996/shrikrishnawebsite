'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { Section, Badge, Button } from '@/components/ui';
import { CTABanner } from '@/components/sections';
import { galleryContent } from '@/config/site.config';
import { pageSEO } from '@/config/seo.config';

// Gallery items derived from config
const galleryItems = galleryContent.images.map((img, index) => ({
  id: index + 1,
  src: img.src,
  title: img.alt,
  category: img.category,
  description: `Professional ${img.category.toLowerCase()} work by Shri Krishna Core Cutting`,
}));

// Extract unique categories from config
const categories = [
  'All',
  ...Array.from(new Set(galleryContent.images.map((img) => img.category))),
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems =
    selectedCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const handlePrev = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredItems.findIndex((item) => item.id === selectedImage);
      const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredItems.length - 1;
      setSelectedImage(filteredItems[prevIndex].id);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredItems.findIndex((item) => item.id === selectedImage);
      const nextIndex = currentIndex < filteredItems.length - 1 ? currentIndex + 1 : 0;
      setSelectedImage(filteredItems[nextIndex].id);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="from-primary-500 via-primary-600 to-primary-700 bg-gradient-to-br pt-40 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <Badge variant="secondary" className="mb-4">
              {galleryContent.badge}
            </Badge>
            <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl">
              {galleryContent.title}
            </h1>
            <p className="text-xl text-white/80">{galleryContent.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <Section background="white" padding="xl">
        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-xl shadow-lg"
                onClick={() => setSelectedImage(item.id)}
              >
                {/* Actual Image */}
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute right-0 bottom-0 left-0 p-6">
                    <Badge variant="secondary" size="sm" className="mb-2">
                      {item.category}
                    </Badge>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                      <ZoomIn className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filteredItems.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-neutral-500">{galleryContent.emptyMessage}</p>
          </div>
        )}
      </Section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 z-10 p-2 text-white/70 hover:text-white"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-8 w-8" />
            </button>

            {/* Navigation buttons */}
            <button
              className="absolute top-1/2 left-4 z-10 -translate-y-1/2 p-2 text-white/70 hover:text-white"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
            >
              <ChevronLeft className="h-10 w-10" />
            </button>

            <button
              className="absolute top-1/2 right-4 z-10 -translate-y-1/2 p-2 text-white/70 hover:text-white"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
            >
              <ChevronRight className="h-10 w-10" />
            </button>

            {/* Image content */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-h-[85vh] w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const item = galleryItems.find((i) => i.id === selectedImage);
                if (!item) return null;

                return (
                  <>
                    <div className="relative aspect-video w-full">
                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        className="rounded-lg object-contain"
                        sizes="100vw"
                        priority
                      />
                    </div>
                    <div className="mt-4 text-center">
                      <Badge variant="secondary" size="sm" className="mb-2">
                        {item.category}
                      </Badge>
                      <h3 className="mb-2 text-xl font-bold text-white">{item.title}</h3>
                      <p className="text-white/70">{item.description}</p>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CTABanner />
    </>
  );
}
