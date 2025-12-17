import { Metadata } from 'next';
import { pageSEO } from '@/config/seo.config';

export const metadata: Metadata = {
  title: pageSEO.gallery.title,
  description: pageSEO.gallery.description,
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
