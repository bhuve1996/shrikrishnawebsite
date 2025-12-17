import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhoneNumber(phone: string): string {
  // Format for display: +91 78887 84324
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 12 && cleaned.startsWith('91')) {
    return `+91 ${cleaned.slice(2, 7)} ${cleaned.slice(7)}`;
  }
  return phone;
}

export function generateWhatsAppLink(phone: string, message?: string): string {
  const cleanedPhone = phone.replace(/\D/g, '');
  const encodedMessage = message ? encodeURIComponent(message) : '';
  return `https://wa.me/${cleanedPhone}${encodedMessage ? `?text=${encodedMessage}` : ''}`;
}

export function generatePhoneLink(phone: string): string {
  const cleanedPhone = phone.replace(/\D/g, '');
  return `tel:+${cleanedPhone}`;
}

export function scrollToSection(sectionId: string): void {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
