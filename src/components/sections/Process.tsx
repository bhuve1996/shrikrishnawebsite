'use client';

import { motion } from 'framer-motion';
import { Phone, ClipboardList, HardHat, CheckCircle2 } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui';

const steps = [
  {
    icon: Phone,
    title: 'Contact Us',
    description:
      'Call or WhatsApp us with your requirements. Share photos if possible for accurate assessment.',
    color: 'bg-blue-500',
  },
  {
    icon: ClipboardList,
    title: 'Get Quote',
    description:
      'We provide a free estimate based on your needs. Site visit available for complex projects.',
    color: 'bg-accent-500',
  },
  {
    icon: HardHat,
    title: 'Work Execution',
    description:
      'Our expert team arrives on schedule with all necessary equipment and completes the job efficiently.',
    color: 'bg-primary-500',
  },
  {
    icon: CheckCircle2,
    title: 'Quality Check',
    description:
      'We ensure complete cleanup, inspect the work quality, and hand over the finished project.',
    color: 'bg-green-500',
  },
];

export function Process() {
  return (
    <Section id="process" background="light" padding="xl">
      <SectionHeader
        title="How It Works"
        subtitle="Simple, transparent process from enquiry to completion"
      />

      <div className="relative">
        {/* Connecting line - hidden on mobile */}
        <div className="absolute top-16 right-0 left-0 hidden h-0.5 bg-neutral-200 lg:block" />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative text-center lg:text-left"
              >
                {/* Step number & icon */}
                <div className="relative mb-6 inline-flex items-center justify-center">
                  <div
                    className={`h-16 w-16 ${step.color} flex items-center justify-center rounded-full shadow-lg`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md">
                    <span className="text-sm font-bold text-neutral-700">{index + 1}</span>
                  </div>
                </div>

                <h3 className="mb-2 text-xl font-bold text-neutral-900">{step.title}</h3>
                <p className="text-sm text-neutral-600">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
