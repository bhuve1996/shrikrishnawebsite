import { Metadata } from 'next';
import { pageSEO } from '@/config/seo.config';

export const metadata: Metadata = {
  title: pageSEO.about.title,
  description: pageSEO.about.description,
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
