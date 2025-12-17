'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { socialLinks } from '@/config/site.config';

export function WhatsAppButton() {
  return (
    <motion.a
      href={socialLinks.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-6 bottom-6 z-50 rounded-full bg-[#25D366] p-4 text-white shadow-lg transition-colors hover:bg-[#20BD5A]"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />

      {/* Pulse animation */}
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-25" />
    </motion.a>
  );
}
