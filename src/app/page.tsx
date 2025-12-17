import { Metadata } from 'next';
import {
  Hero,
  ServicesOverview,
  WhyChooseUs,
  Process,
  ServiceAreas,
  Testimonials,
  CTABanner,
} from '@/components/sections';
import { pageSEO } from '@/config/seo.config';

export const metadata: Metadata = {
  title: pageSEO.home.title,
  description: pageSEO.home.description,
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <Process />
      <ServiceAreas />
      <Testimonials />
      <CTABanner />
    </>
  );
}
