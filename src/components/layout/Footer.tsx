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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Logo variant="light" size="md" className="mb-6" />
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              Professional core cutting, rebaring, and concrete drilling services in
              Kharar, Mohali, and the Tricity region. Trusted by 70+ satisfied customers
              with a 5-star rating.
            </p>
            <div className="flex items-center gap-2 text-accent-400">
              <span className="text-lg">★★★★★</span>
              <span className="text-sm text-neutral-400">
                {businessInfo.rating} ({businessInfo.reviewCount} reviews)
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-neutral-400 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="text-neutral-400 hover:text-white transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={socialLinks.phone}
                  className="flex items-start gap-3 text-neutral-400 hover:text-white transition-colors group"
                >
                  <Phone className="w-5 h-5 mt-0.5 text-accent-400 group-hover:text-accent-300" />
                  <span className="text-sm">{businessInfo.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-neutral-400 hover:text-white transition-colors group"
                >
                  <MessageCircle className="w-5 h-5 mt-0.5 text-green-400 group-hover:text-green-300" />
                  <span className="text-sm">WhatsApp Us</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${businessInfo.email}`}
                  className="flex items-start gap-3 text-neutral-400 hover:text-white transition-colors group"
                >
                  <Mail className="w-5 h-5 mt-0.5 text-accent-400 group-hover:text-accent-300" />
                  <span className="text-sm break-all">{businessInfo.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={businessInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-neutral-400 hover:text-white transition-colors group"
                >
                  <MapPin className="w-5 h-5 mt-0.5 text-accent-400 group-hover:text-accent-300 flex-shrink-0" />
                  <span className="text-sm">{businessInfo.address.full}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-neutral-400">
                <Clock className="w-5 h-5 mt-0.5 text-accent-400 flex-shrink-0" />
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-neutral-500 text-sm text-center sm:text-left">
              © {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            <a
              href={businessInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-neutral-500 hover:text-white text-sm transition-colors"
            >
              <span>View on Google Maps</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

