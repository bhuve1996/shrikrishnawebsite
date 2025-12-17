import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoProps {
  variant?: 'default' | 'light';
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeStyles = {
  sm: { width: 120, height: 40 },
  md: { width: 160, height: 53 },
  lg: { width: 200, height: 67 },
};

export function Logo({ variant = 'default', showText = true, size = 'md', className }: LogoProps) {
  const { width, height } = sizeStyles[size];

  return (
    <Link href="/" className={cn('flex items-center group', className)}>
      <Image
        src="/Shree_logo.png"
        alt="Shri Krishna Core Cutting and Rebaring"
        width={width}
        height={height}
        className={cn(
          'transition-transform duration-300 group-hover:scale-105',
          variant === 'light' && 'brightness-0 invert'
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
