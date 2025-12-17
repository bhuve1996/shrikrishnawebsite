'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { Section, Button, Badge, Card, Input, Textarea, Select } from '@/components/ui';
import { businessInfo, socialLinks } from '@/config/site.config';
import { services } from '@/config/services.config';
import { pageSEO } from '@/config/seo.config';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email').or(z.string().length(0)),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      service: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Create WhatsApp message
    const message = `Hi, I'm ${data.name}
Phone: ${data.phone}
${data.email ? `Email: ${data.email}` : ''}
Service: ${data.service}
${data.message ? `Message: ${data.message}` : ''}`;

    // Open WhatsApp with pre-filled message
    window.open(
      `https://wa.me/${businessInfo.whatsapp.replace('+', '')}?text=${encodeURIComponent(message)}`,
      '_blank'
    );

    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
  };

  // Generate service options from config
  const serviceOptions = [
    ...services.map((s) => ({ value: s.id, label: s.name })),
    { value: 'other', label: 'Other' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="from-primary-500 via-primary-600 to-primary-700 bg-gradient-to-br pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <Badge variant="secondary" className="mb-4">
              Contact Us
            </Badge>
            <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl">
              {pageSEO.contact.title.replace(' - Get Free Quote', '')}
            </h1>
            <p className="text-xl text-white/80">
              Ready to start your project? Contact us for a free quote. We respond within minutes!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <Section background="white" padding="xl">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-2xl font-bold text-neutral-900">Send Us a Message</h2>

            {isSubmitted ? (
              <Card variant="elevated" className="py-12 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-neutral-900">Thank You!</h3>
                <p className="mb-6 text-neutral-600">
                  Your enquiry has been submitted. We will contact you shortly.
                </p>
                <Button variant="primary" onClick={() => setIsSubmitted(false)}>
                  Send Another Message
                </Button>
              </Card>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <Input
                  label="Your Name"
                  placeholder="Enter your full name"
                  required
                  error={errors.name?.message}
                  {...register('name')}
                />

                <Input
                  label="Phone Number"
                  type="tel"
                  placeholder="Enter your phone number"
                  required
                  error={errors.phone?.message}
                  {...register('phone')}
                />

                <Input
                  label="Email Address"
                  type="email"
                  placeholder="Enter your email (optional)"
                  error={errors.email?.message}
                  {...register('email')}
                />

                <Select
                  label="Service Required"
                  placeholder="Select a service"
                  required
                  options={serviceOptions}
                  error={errors.service?.message}
                  {...register('service')}
                />

                <Textarea
                  label="Your Message"
                  placeholder="Describe your requirements..."
                  {...register('message')}
                />

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  isLoading={isSubmitting}
                  leftIcon={<Send className="h-5 w-5" />}
                >
                  Send Enquiry
                </Button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="mb-6 text-2xl font-bold text-neutral-900">Contact Information</h2>

            {/* Quick Contact Cards */}
            <Card variant="elevated" hover>
              <a href={socialLinks.phone} className="flex items-start gap-4">
                <div className="bg-primary-100 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg">
                  <Phone className="text-primary-500 h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900">Call Us</h3>
                  <p className="text-neutral-600">{businessInfo.phoneDisplay}</p>
                  <p className="text-sm text-neutral-500">Available 9 AM - 9 PM</p>
                </div>
              </a>
            </Card>

            <Card variant="elevated" hover>
              <a
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-green-100">
                  <MessageCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900">WhatsApp</h3>
                  <p className="text-neutral-600">Quick response guaranteed</p>
                  <p className="text-sm text-neutral-500">Click to chat now</p>
                </div>
              </a>
            </Card>

            <Card variant="elevated" hover>
              <a href={`mailto:${businessInfo.email}`} className="flex items-start gap-4">
                <div className="bg-accent-100 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg">
                  <Mail className="text-accent-600 h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900">Email</h3>
                  <p className="break-all text-neutral-600">{businessInfo.email}</p>
                  <p className="text-sm text-neutral-500">We reply within 24 hours</p>
                </div>
              </a>
            </Card>

            <Card variant="elevated">
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg">
                  <MapPin className="text-primary-500 h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900">Address</h3>
                  <p className="text-neutral-600">{businessInfo.address.full}</p>
                  <a
                    href={businessInfo.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-500 hover:text-primary-600 text-sm"
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg">
                  <Clock className="text-primary-500 h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900">Working Hours</h3>
                  <div className="space-y-1 text-sm text-neutral-600">
                    <p>Monday - Saturday: {businessInfo.hours.weekdays}</p>
                    <p>Sunday: {businessInfo.hours.sunday}</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Map Section */}
      <Section background="light" padding="lg" container={false}>
        <div className="h-[400px] w-full">
          <iframe
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.5!2d${businessInfo.coordinates.longitude}!3d${businessInfo.coordinates.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ffbe5f78bfc43%3A0x902e798f0cd0ff42!2sShri%20Krishna%20Core%20Cutting%20and%20Rebaring!5e0!3m2!1sen!2sin!4v1702831550000!5m2!1sen!2sin`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Our Location"
          />
        </div>
      </Section>
    </>
  );
}
