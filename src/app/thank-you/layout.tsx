import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thank You',
  description: 'Thank you for your enquiry. We will contact you shortly.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
