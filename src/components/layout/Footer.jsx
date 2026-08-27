import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Globe, Camera, MessageCircle } from 'lucide-react';
import { contactInfo } from '@/data/contact';
import { services } from '@/data/services';
import { outstationPackages } from '@/data/packages';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="inline-block group">
              <div className="relative w-24 h-24 transform group-hover:scale-105 transition-transform bg-white rounded-full p-2">
                <Image src="/images/logo.png" alt="GNR Cabs Zone Logo" fill className="object-contain p-2" />
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Premium cab booking service in Bangalore offering reliable, safe, and comfortable rides for local sightseeing, outstation trips, and airport transfers.
            </p>
            <div className="flex gap-4">
              <a href={contactInfo.socials.facebook} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-dark transition-colors" aria-label="Facebook">
                <Globe className="w-5 h-5" />
              </a>
              <a href={contactInfo.socials.instagram} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-dark transition-colors" aria-label="Instagram">
                <Camera className="w-5 h-5" />
              </a>
              <a href={contactInfo.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-green-500 hover:text-white transition-colors" aria-label="WhatsApp">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6 relative inline-block pb-2 after:content-[''] after:absolute after:w-1/2 after:h-0.5 after:bg-primary after:bottom-0 after:left-0">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map(service => (
                <li key={service.id}>
                  <Link href={`/services/${service.slug}`} className="text-sm hover:text-primary transition-colors flex items-center gap-2 before:content-['›'] before:text-primary">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Packages */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6 relative inline-block pb-2 after:content-[''] after:absolute after:w-1/2 after:h-0.5 after:bg-primary after:bottom-0 after:left-0">
              Popular Packages
            </h4>
            <ul className="space-y-3">
              {outstationPackages.slice(0, 5).map(pkg => (
                <li key={pkg.id}>
                  <Link href="/packages" className="text-sm hover:text-primary transition-colors flex items-center gap-2 before:content-['›'] before:text-primary">
                    Bangalore to {pkg.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6 relative inline-block pb-2 after:content-[''] after:absolute after:w-1/2 after:h-0.5 after:bg-primary after:bottom-0 after:left-0">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>{contactInfo.address}</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <div className="flex flex-col gap-1">
                  {contactInfo.phones.map(phone => (
                    <a key={phone} href={`tel:${phone.replace(/[^0-9+]/g, '')}`} className="hover:text-primary transition-colors">{phone}</a>
                  ))}
                </div>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-primary transition-colors">{contactInfo.email}</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {currentYear} {contactInfo.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
