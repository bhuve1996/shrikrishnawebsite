import type {
  ReactNode,
  HTMLAttributes,
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react';

// ============================================
// Common Types
// ============================================

export interface BaseProps {
  className?: string;
  children?: ReactNode;
}

// ============================================
// UI Component Types
// ============================================

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  href?: string;
}

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'bordered';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hoverable?: boolean;
}

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'dark';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  container?: boolean;
}

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

// ============================================
// Config Types
// ============================================

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  locale: string;
  foundedYear: number;
  experience: string;
  projectsCompleted: string;
}

export interface ContactInfo {
  phone: {
    primary: string;
    secondary?: string;
    display: string;
  };
  whatsapp: string;
  email: string;
  address: {
    street: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    full: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  businessHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  googleMapsUrl: string;
  googleMapsPlaceId: string;
}

export interface Service {
  id: string;
  name: string;
  shortName: string;
  description: string;
  longDescription: string;
  icon: string;
  image?: string;
  features: string[];
  useCases: string[];
  benefits: string[];
  specifications?: Record<string, string>;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  date?: string;
  source: 'google' | 'website' | 'direct';
  avatar?: string;
  location?: string;
  projectType?: string;
}

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  twitterHandle?: string;
}

export interface ThemeColors {
  primary: Record<string, string>;
  secondary: Record<string, string>;
  accent: Record<string, string>;
  neutral: Record<string, string>;
}

// ============================================
// Section Component Types
// ============================================

export interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  backgroundImage?: string;
}

export interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export interface ServiceCardProps {
  service: Service;
  className?: string;
  showFullDescription?: boolean;
}

// ============================================
// Form Types
// ============================================

export interface ContactFormData {
  name: string;
  phone: string;
  email?: string;
  service?: string;
  message: string;
}

export interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => Promise<void>;
  className?: string;
}

// ============================================
// Navigation Types
// ============================================

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface HeaderProps {
  transparent?: boolean;
  sticky?: boolean;
}

export interface FooterProps {
  showNewsletter?: boolean;
}

// ============================================
// Gallery Types
// ============================================

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category?: string;
  caption?: string;
  width?: number;
  height?: number;
}

export interface GalleryProps {
  images: GalleryImage[];
  columns?: 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg';
}

// ============================================
// FAQ Types
// ============================================

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface FAQProps {
  items: FAQItem[];
  className?: string;
}

// ============================================
// Layout Types
// ============================================

export interface PageLayoutProps {
  title: string;
  description?: string;
  children: ReactNode;
  showBreadcrumbs?: boolean;
}

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

// ============================================
// Animation Types
// ============================================

export interface AnimationVariants {
  hidden: Record<string, unknown>;
  visible: Record<string, unknown>;
}

export interface MotionConfig {
  initial?: string | Record<string, unknown>;
  animate?: string | Record<string, unknown>;
  exit?: string | Record<string, unknown>;
  transition?: Record<string, unknown>;
}
