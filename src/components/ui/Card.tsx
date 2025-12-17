'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps extends Omit<HTMLMotionProps<'div'>, 'ref'> {
  variant?: 'default' | 'elevated' | 'outlined' | 'glass';
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const variantStyles = {
  default: 'bg-white',
  elevated: 'bg-white shadow-lg',
  outlined: 'bg-white border border-neutral-200',
  glass: 'bg-white/80 backdrop-blur-md border border-white/20',
};

const paddingStyles = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export function Card({
  variant = 'elevated',
  hover = false,
  padding = 'md',
  className,
  children,
  ...props
}: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' } : undefined}
      className={cn(
        'rounded-xl transition-all duration-300',
        variantStyles[variant],
        paddingStyles[padding],
        hover && 'cursor-pointer',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface CardHeaderProps {
  className?: string;
  children: React.ReactNode;
}

export function CardHeader({ className, children }: CardHeaderProps) {
  return <div className={cn('mb-4', className)}>{children}</div>;
}

interface CardTitleProps {
  className?: string;
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export function CardTitle({ className, children, as: Tag = 'h3' }: CardTitleProps) {
  return <Tag className={cn('text-xl font-bold text-neutral-900', className)}>{children}</Tag>;
}

interface CardDescriptionProps {
  className?: string;
  children: React.ReactNode;
}

export function CardDescription({ className, children }: CardDescriptionProps) {
  return <p className={cn('mt-1 text-neutral-600', className)}>{children}</p>;
}

interface CardContentProps {
  className?: string;
  children: React.ReactNode;
}

export function CardContent({ className, children }: CardContentProps) {
  return <div className={cn('', className)}>{children}</div>;
}

interface CardFooterProps {
  className?: string;
  children: React.ReactNode;
}

export function CardFooter({ className, children }: CardFooterProps) {
  return <div className={cn('mt-4 border-t border-neutral-100 pt-4', className)}>{children}</div>;
}
