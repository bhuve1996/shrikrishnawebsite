'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { Section, Badge, Button } from '@/components/ui';
import { CTABanner } from '@/components/sections';

// Gallery items with actual photos from Google Maps data
const galleryItems = [
  {
    id: 1,
    src: '/images/gallery/photo_1.jpg',
    title: 'Commercial Building Core Cutting',
    category: 'Core Cutting',
    description: 'Precision core cutting for fire safety pipe installation in commercial building.',
  },
  {
    id: 2,
    src: '/images/gallery/photo_2.jpg',
    title: 'Industrial Core Drilling',
    category: 'Core Cutting',
    description: 'Heavy-duty core drilling work at industrial facility.',
  },
  {
    id: 3,
    src: '/images/gallery/photo_3.jpg',
    title: 'Residential AC Hole Cutting',
    category: 'Chimney Cutting',
    description: 'Clean AC pipe hole cutting for residential apartments.',
  },
  {
    id: 4,
    src: '/images/gallery/photo_4.jpg',
    title: 'Structural Rebaring Work',
    category: 'Rebaring',
    description: 'Professional rebaring for building extension project.',
  },
  {
    id: 5,
    src: '/images/gallery/photo_5.jpg',
    title: 'Factory Floor Core Cutting',
    category: 'Core Cutting',
    description: 'Core cutting in industrial factory floor with safety equipment.',
  },
  {
    id: 6,
    src: '/images/gallery/photo_6.jpg',
    title: 'Drainage System Installation',
    category: 'Core Cutting',
    description: 'Large diameter core cutting for drainage and plumbing work.',
  },
  {
    id: 7,
    src: '/images/gallery/photo_7.jpg',
    title: 'Commercial Building Work',
    category: 'Drilling',
    description: 'Concrete drilling for cable and pipe passages.',
  },
  {
    id: 8,
    src: '/images/gallery/photo_8.jpg',
    title: 'MEP Core Cutting',
    category: 'Core Cutting',
    description: 'Core cutting for mechanical, electrical, and plumbing installations.',
  },
  {
    id: 9,
    src: '/images/gallery/photo_9.jpg',
    title: 'Fire Safety Pipe Installation',
    category: 'Core Cutting',
    description: 'Core holes for fire sprinkler system pipe routing.',
  },
  {
    id: 10,
    src: '/images/gallery/photo_10.jpg',
    title: 'Building Construction Work',
    category: 'Dismantling',
    description: 'Controlled dismantling and modification work.',
  },
  {
    id: 11,
    src: '/images/gallery/photo_11.jpg',
    title: 'Multi-floor Core Cutting',
    category: 'Core Cutting',
    description: 'Precision core cutting across multiple floors for utilities.',
  },
];

const categories = ['All', 'Core Cutting', 'Chimney Cutting', 'Rebaring', 'Dismantling', 'Drilling'];

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
      <section className="bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <Badge variant="secondary" className="mb-4">
              Our Work
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Project Gallery
            </h1>
            <p className="text-xl text-white/80">
              Browse through our completed projects and see the quality of our 
              core cutting, rebaring, and concrete work across residential and commercial sites.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <Section background="white" padding="xl">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
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
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer shadow-lg"
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <Badge variant="secondary" size="sm" className="mb-2">
                      {item.category}
                    </Badge>
                    <h3 className="font-semibold text-white text-lg">{item.title}</h3>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <ZoomIn className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-neutral-500">No projects found in this category.</p>
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
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-white/70 hover:text-white p-2 z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation buttons */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 z-10"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 z-10"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            {/* Image content */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-5xl max-h-[85vh] w-full"
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
                        className="object-contain rounded-lg"
                        sizes="100vw"
                        priority
                      />
                    </div>
                    <div className="mt-4 text-center">
                      <Badge variant="secondary" size="sm" className="mb-2">
                        {item.category}
                      </Badge>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {item.title}
                      </h3>
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
