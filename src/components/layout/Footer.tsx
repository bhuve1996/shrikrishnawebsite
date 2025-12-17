import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, MessageCircle, ExternalLink } from 'lucide-react';
import { Logo } from './Logo';
import { businessInfo, navigation, socialLinks, siteConfig } from '@/config/site.config';
import { services } from '@/config/services.config';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Logo variant="light" size="md" className="mb-6" />
            <p className="mb-6 text-sm leading-relaxed text-neutral-400">
              Professional core cutting, rebaring, and concrete drilling services in Kharar, Mohali,
              and the Tricity region. Trusted by 70+ satisfied customers with a 5-star rating.
            </p>
            <div className="text-accent-400 flex items-center gap-2">
              <span className="text-lg">★★★★★</span>
              <span className="text-sm text-neutral-400">
                {businessInfo.rating} ({businessInfo.reviewCount} reviews)
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-400 transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="text-sm text-neutral-400 transition-colors hover:text-white"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={socialLinks.phone}
                  className="group flex items-start gap-3 text-neutral-400 transition-colors hover:text-white"
                >
                  <Phone className="text-accent-400 group-hover:text-accent-300 mt-0.5 h-5 w-5" />
                  <span className="text-sm">{businessInfo.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 text-neutral-400 transition-colors hover:text-white"
                >
                  <MessageCircle className="mt-0.5 h-5 w-5 text-green-400 group-hover:text-green-300" />
                  <span className="text-sm">WhatsApp Us</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${businessInfo.email}`}
                  className="group flex items-start gap-3 text-neutral-400 transition-colors hover:text-white"
                >
                  <Mail className="text-accent-400 group-hover:text-accent-300 mt-0.5 h-5 w-5" />
                  <span className="text-sm break-all">{businessInfo.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={businessInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 text-neutral-400 transition-colors hover:text-white"
                >
                  <MapPin className="text-accent-400 group-hover:text-accent-300 mt-0.5 h-5 w-5 flex-shrink-0" />
                  <span className="text-sm">{businessInfo.address.full}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-neutral-400">
                <Clock className="text-accent-400 mt-0.5 h-5 w-5 flex-shrink-0" />
                <div className="text-sm">
                  <p>Mon-Sat: {businessInfo.hours.weekdays}</p>
                  <p>Sunday: {businessInfo.hours.sunday}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-center text-sm text-neutral-500 sm:text-left">
              © {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            <a
              href={businessInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-neutral-500 transition-colors hover:text-white"
            >
              <span>View on Google Maps</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
