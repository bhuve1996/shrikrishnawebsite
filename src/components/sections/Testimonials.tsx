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
        className="flex flex-col items-center mb-12"
      >
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-8 h-8 text-accent-400 fill-accent-400"
            />
          ))}
        </div>
        <p className="text-neutral-600">
          <span className="font-bold text-neutral-900">{reviewStats.averageRating}</span> out of 5 based on{' '}
          <span className="font-bold text-neutral-900">{reviewStats.totalReviews}</span> reviews on Google
        </p>
      </motion.div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.slice(0, 6).map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col">
              {/* Quote icon */}
              <Quote className="w-10 h-10 text-primary-100 mb-4" />
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-accent-400 fill-accent-400"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-neutral-600 text-sm flex-grow mb-4 line-clamp-4">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="pt-4 border-t border-neutral-100">
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
        className="text-center mt-10"
      >
        <a
          href={businessInfo.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary-500 font-medium hover:text-primary-600 transition-colors"
        >
          View all {reviewStats.totalReviews} reviews on Google
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </motion.div>
    </Section>
  );
}

