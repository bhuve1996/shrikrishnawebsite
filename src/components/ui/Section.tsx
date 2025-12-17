'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  background?: 'white' | 'light' | 'dark' | 'primary' | 'gradient';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  container?: boolean;
}

const backgroundStyles = {
  white: 'bg-white',
  light: 'bg-neutral-50',
  dark: 'bg-neutral-900 text-white',
  primary: 'bg-primary-500 text-white',
  gradient: 'bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white',
};

const paddingStyles = {
  sm: 'py-12',
  md: 'py-16',
  lg: 'py-20',
  xl: 'py-24',
};

export function Section({
  id,
  className,
  children,
  background = 'white',
  padding = 'lg',
  container = true,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(backgroundStyles[background], paddingStyles[padding], className)}
    >
      {container ? (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
      ) : (
        children
      )}
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  dark?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
  className,
  dark = false,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn('mb-12', centered && 'text-center', className)}
    >
      <h2
        className={cn(
          'mb-4 text-3xl font-bold sm:text-4xl',
          dark ? 'text-white' : 'text-neutral-900'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'max-w-2xl text-lg',
            centered && 'mx-auto',
            dark ? 'text-white/80' : 'text-neutral-600'
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
