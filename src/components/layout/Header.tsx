'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Logo } from './Logo';
import { Button } from '@/components/ui';
import { navigation, businessInfo, socialLinks } from '@/config/site.config';
import { cn } from '@/lib/utils';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    if (isOpen) {
      setIsOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 right-0 left-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 py-2 shadow-md backdrop-blur-md'
          : 'bg-white/90 py-3 shadow-sm backdrop-blur-sm'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Logo variant="default" size="md" />

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'hover:text-accent-500 text-sm font-medium transition-colors duration-200',
                  pathname === item.href ? 'text-accent-500' : 'text-neutral-700'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden items-center gap-3 lg:flex">
            <Button
              variant="outline"
              size="sm"
              leftIcon={<Phone className="h-4 w-4" />}
              onClick={() => window.open(socialLinks.phone, '_self')}
            >
              {businessInfo.phoneDisplay}
            </Button>
            <Button
              variant="whatsapp"
              size="sm"
              leftIcon={<MessageCircle className="h-4 w-4" />}
              onClick={() => window.open(socialLinks.whatsapp, '_blank')}
            >
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="rounded-lg p-2 transition-colors hover:bg-neutral-100 lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-neutral-700" />
            ) : (
              <Menu className="h-6 w-6 text-neutral-700" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden lg:hidden"
            >
              <div className="space-y-2 py-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      'block rounded-lg px-4 py-3 text-base font-medium transition-colors',
                      pathname === item.href
                        ? 'bg-primary-50 text-primary-500'
                        : 'text-neutral-700 hover:bg-neutral-50'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="space-y-3 pt-4">
                  <Button
                    variant="outline"
                    fullWidth
                    leftIcon={<Phone className="h-4 w-4" />}
                    onClick={() => window.open(socialLinks.phone, '_self')}
                  >
                    Call {businessInfo.phoneDisplay}
                  </Button>
                  <Button
                    variant="whatsapp"
                    fullWidth
                    leftIcon={<MessageCircle className="h-4 w-4" />}
                    onClick={() => window.open(socialLinks.whatsapp, '_blank')}
                  >
                    WhatsApp Us
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
