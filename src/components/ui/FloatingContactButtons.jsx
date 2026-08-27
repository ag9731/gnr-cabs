'use client';

import { Phone, MessageCircle, Camera, Globe } from 'lucide-react';
import { contactInfo } from '@/data/contact';

export default function FloatingContactButtons() {
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center justify-center gap-3">
      {/* WhatsApp */}
      <a
        href={contactInfo.socials.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform hover:shadow-green-500/30 group relative"
        aria-label="WhatsApp Us"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-full mr-3 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap">
          WhatsApp Us
        </span>
      </a>

      {/* Phone */}
      <a
        href={`tel:${contactInfo.primaryPhone}`}
        className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-dark shadow-lg hover:scale-110 transition-transform hover:shadow-primary/30 group relative"
        aria-label="Call Us"
      >
        <Phone className="w-6 h-6" />
        <span className="absolute right-full mr-3 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap">
          Call Now
        </span>
      </a>

      {/* Instagram */}
      <a
        href={contactInfo.socials.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform hover:shadow-pink-500/30 group relative"
        aria-label="Follow on Instagram"
      >
        <Camera className="w-6 h-6" />
        <span className="absolute right-full mr-3 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap">
          Instagram
        </span>
      </a>

      {/* Facebook */}
      <a
        href={contactInfo.socials.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform hover:shadow-blue-600/30 group relative"
        aria-label="Follow on Facebook"
      >
        <Globe className="w-6 h-6" />
        <span className="absolute right-full mr-3 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap">
          Facebook
        </span>
      </a>
    </div>
  );
}
