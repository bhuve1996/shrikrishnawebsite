import { Metadata } from 'next';
import { pageSEO } from '@/config/seo.config';

export const metadata: Metadata = {
  title: pageSEO.contact.title,
  description: pageSEO.contact.description,
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

