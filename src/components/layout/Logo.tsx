import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoProps {
  variant?: 'default' | 'light';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

// Reduced height by 20% for better nav fit
const sizeStyles = {
  sm: { width: 96, height: 32 },
  md: { width: 128, height: 42 },
  lg: { width: 160, height: 53 },
};

export function Logo({ variant = 'default', size = 'md', className }: LogoProps) {
  const { width, height } = sizeStyles[size];

  return (
    <Link href="/" className={cn('group flex items-center', className)}>
      <Image
        src="/Shree_logo.png"
        alt="Shri Krishna Core Cutting and Rebaring"
        width={width}
        height={height}
        className={cn(
          'transition-transform duration-300 group-hover:scale-105',
          // Add drop shadow for visibility on dark backgrounds
          variant === 'light' && 'drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]'
        )}
        priority
      />
    </Link>
  );
}

// Small icon version for favicon display
export function LogoIcon({ className }: { className?: string }) {
  return (
    <Image
      src="/Shree_logo.png"
      alt="SKC"
      width={40}
      height={40}
      className={cn('object-contain', className)}
    />
  );
}
