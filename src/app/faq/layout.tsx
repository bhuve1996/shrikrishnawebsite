import { Metadata } from 'next';
import { pageSEO } from '@/config/seo.config';

export const metadata: Metadata = {
  title: pageSEO.faq.title,
  description: pageSEO.faq.description,
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
