'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Section, SectionHeader, Card } from '@/components/ui';
import { testimonials, reviewStats } from '@/config/testimonials.config';
import { businessInfo } from '@/config/site.config';

export function Testimonials() {
  return (
    <Section id="testimonials" background="light" padding="xl">
      <SectionHeader
        title="What Our Customers Say"
        subtitle={`Trusted by ${reviewStats.totalReviews}+ customers with a perfect ${reviewStats.averageRating}-star rating`}
      />

      {/* Rating summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 flex flex-col items-center"
      >
        <div className="mb-2 flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="text-accent-400 fill-accent-400 h-8 w-8" />
          ))}
        </div>
        <p className="text-neutral-600">
          <span className="font-bold text-neutral-900">{reviewStats.averageRating}</span> out of 5
          based on <span className="font-bold text-neutral-900">{reviewStats.totalReviews}</span>{' '}
          reviews on Google
        </p>
      </motion.div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.slice(0, 6).map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="flex h-full flex-col">
              {/* Quote icon */}
              <Quote className="text-primary-100 mb-4 h-10 w-10" />

              {/* Rating */}
              <div className="mb-3 flex items-center gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-accent-400 fill-accent-400 h-4 w-4" />
                ))}
              </div>

              {/* Text */}
              <p className="mb-4 line-clamp-4 flex-grow text-sm text-neutral-600">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="border-t border-neutral-100 pt-4">
                <p className="font-semibold text-neutral-900">{testimonial.author}</p>
                <div className="flex items-center gap-2 text-sm text-neutral-500">
                  {testimonial.location && <span>{testimonial.location}</span>}
                  <span>•</span>
                  <span>{testimonial.date}</span>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* View all reviews link */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-10 text-center"
      >
        <a
          href={businessInfo.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-500 hover:text-primary-600 inline-flex items-center gap-2 font-medium transition-colors"
        >
          View all {reviewStats.totalReviews} reviews on Google
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </motion.div>
    </Section>
  );
}
