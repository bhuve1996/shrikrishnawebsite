import { Metadata } from 'next';
import { pageSEO } from '@/config/seo.config';

export const metadata: Metadata = {
  title: pageSEO.services.title,
  description: pageSEO.services.description,
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
