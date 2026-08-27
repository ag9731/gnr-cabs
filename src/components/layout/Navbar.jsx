'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Menu, X, ChevronDown, PhoneCall } from 'lucide-react';
import { contactInfo } from '@/data/contact';
import { services } from '@/data/services';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path) => pathname === path;
  const isServiceActive = pathname.startsWith('/services');

  return (
    <>
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-16 h-16 transform group-hover:scale-105 transition-transform">
              <Image src="/images/logo.png" alt="GNR Cabs Zone Logo" fill className="object-contain object-left" priority />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className={`font-medium transition-colors hover:text-primary ${
                isActive('/') ? 'text-primary' : 'text-dark'
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`font-medium transition-colors hover:text-primary ${
                isActive('/about') ? 'text-primary' : 'text-dark'
              }`}
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <Link
                href="/services"
                className={`font-medium flex items-center gap-1 transition-colors hover:text-primary ${
                  isServiceActive ? 'text-primary' : 'text-dark'
                }`}
              >
                Services <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </Link>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform origin-top-left group-hover:translate-y-0 translate-y-2 border border-gray-100">
                {services.map((service) => (
                  <Link
                    key={service.id}
                    href={`/services/${service.slug}`}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/packages"
              className={`font-medium transition-colors hover:text-primary ${
                isActive('/packages') ? 'text-primary' : 'text-dark'
              }`}
            >
              Packages
            </Link>
            <Link
              href="/pricing"
              className={`font-medium transition-colors hover:text-primary ${
                isActive('/pricing') ? 'text-primary' : 'text-dark'
              }`}
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className={`font-medium transition-colors hover:text-primary ${
                isActive('/contact') ? 'text-primary' : 'text-dark'
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href={`tel:${contactInfo.primaryPhone}`}
              className="hidden md:flex items-center gap-2 text-dark font-medium hover:text-primary transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <PhoneCall className="w-4 h-4" />
              </div>
              <span className="text-sm xl:text-base">{contactInfo.phones[0]}</span>
            </a>
            
            <Link
              href="/#booking-form"
              className="hidden lg:block bg-primary text-dark px-6 py-2.5 rounded-full font-semibold hover:bg-primary-hover hover:scale-105 transition-all shadow-sm"
            >
              Book Now
            </Link>

            <button
              onClick={toggleMenu}
              className="lg:hidden text-dark p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      </header>

      {/* Mobile Drawer Navigation (Moved outside header to prevent clipping from backdrop-blur containing block) */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] lg:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={toggleMenu}
      >
        <div
          className={`absolute top-0 right-0 w-4/5 max-w-sm h-full bg-white shadow-2xl transition-transform duration-300 transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } overflow-y-auto`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 flex flex-col min-h-full">
            <div className="flex justify-between items-center mb-8">
              <span className="font-bold text-xl text-dark">Menu</span>
              <button onClick={toggleMenu} className="p-2 bg-gray-100 rounded-full text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-2">
              <MobileNavLink href="/" onClick={toggleMenu} active={isActive('/')}>
                Home
              </MobileNavLink>
              <MobileNavLink href="/about" onClick={toggleMenu} active={isActive('/about')}>
                About Us
              </MobileNavLink>
              
              <div className="py-1">
                <button 
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-gray-50 hover:text-primary transition-colors"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${isServicesOpen ? 'max-h-96 opacity-100 mt-1' : 'max-h-0 opacity-0'}`}>
                  <div className="flex flex-col gap-1 pl-4 ml-4 border-l-2 border-gray-100">
                    <MobileNavLink href="/services" onClick={toggleMenu} active={isActive('/services')}>
                      All Services
                    </MobileNavLink>
                    {services.map(service => (
                      <MobileNavLink 
                        key={service.id} 
                        href={`/services/${service.slug}`} 
                        onClick={toggleMenu}
                        active={isActive(`/services/${service.slug}`)}
                        isSubitem
                      >
                        {service.title}
                      </MobileNavLink>
                    ))}
                  </div>
                </div>
              </div>

              <MobileNavLink href="/packages" onClick={toggleMenu} active={isActive('/packages')}>
                Packages
              </MobileNavLink>
              <MobileNavLink href="/pricing" onClick={toggleMenu} active={isActive('/pricing')}>
                Pricing
              </MobileNavLink>
              <MobileNavLink href="/contact" onClick={toggleMenu} active={isActive('/contact')}>
                Contact Us
              </MobileNavLink>
            </nav>

            <div className="mt-auto pt-8">
              <a 
                href={`tel:${contactInfo.primaryPhone}`}
                className="flex items-center justify-center gap-2 w-full py-3 border-2 border-primary text-dark rounded-xl font-semibold mb-3 hover:bg-primary/5"
              >
                <PhoneCall className="w-5 h-5" />
                Call Now
              </a>
              <Link
                href="/#booking-form"
                onClick={toggleMenu}
                className="flex items-center justify-center w-full py-3 bg-primary text-dark rounded-xl font-bold shadow-md hover:bg-primary-hover"
              >
                Book a Cab
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function MobileNavLink({ href, onClick, children, active, isSubitem }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`block px-4 py-3 rounded-lg transition-colors ${
        isSubitem ? 'text-sm' : 'font-medium'
      } ${
        active
          ? 'bg-primary/10 text-primary font-semibold'
          : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
      }`}
    >
      {children}
    </Link>
  );
}
