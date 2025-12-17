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
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2'
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Logo variant={isScrolled ? 'default' : 'default'} size="md" />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors duration-200 hover:text-accent-500',
                  pathname === item.href
                    ? 'text-accent-500'
                    : isScrolled
                    ? 'text-neutral-700'
                    : 'text-neutral-800'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              leftIcon={<Phone className="w-4 h-4" />}
              onClick={() => window.open(socialLinks.phone, '_self')}
            >
              {businessInfo.phoneDisplay}
            </Button>
            <Button
              variant="whatsapp"
              size="sm"
              leftIcon={<MessageCircle className="w-4 h-4" />}
              onClick={() => window.open(socialLinks.whatsapp, '_blank')}
            >
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-neutral-700" />
            ) : (
              <Menu className="w-6 h-6 text-neutral-700" />
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
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      'block py-3 px-4 rounded-lg text-base font-medium transition-colors',
                      pathname === item.href
                        ? 'bg-primary-50 text-primary-500'
                        : 'text-neutral-700 hover:bg-neutral-50'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 space-y-3">
                  <Button
                    variant="outline"
                    fullWidth
                    leftIcon={<Phone className="w-4 h-4" />}
                    onClick={() => window.open(socialLinks.phone, '_self')}
                  >
                    Call {businessInfo.phoneDisplay}
                  </Button>
                  <Button
                    variant="whatsapp"
                    fullWidth
                    leftIcon={<MessageCircle className="w-4 h-4" />}
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

