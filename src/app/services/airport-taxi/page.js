import Image from 'next/image';
import { CheckCircle2, Plane, Clock, PlaneTakeoff, ShieldCheck, MapPin } from 'lucide-react';
import Link from 'next/link';
import ContactForm from '@/components/forms/ContactForm';
import CTASection from '@/components/sections/CTASection';
import FAQSection from '@/components/sections/FAQSection';

export const metadata = {
  title: "Bangalore Airport Taxi | Fixed Price Cab Booking",
  description: "Book reliable airport taxi services for Kempegowda International Airport (KIAL), Bangalore. Fixed fares, on-time pickup and drop, and comfortable rides.",
  keywords: "Bangalore airport taxi, Bangalore airport cab, airport taxi Bangalore, airport cab booking Bangalore, Bangalore airport pickup, Bangalore airport drop",
};

export default function AirportTaxi() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-dark text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-transparent z-10"></div>
          <Image 
            src="/images/airport_taxi_hero.jpg" 
            alt="Airport taxi waiting at Kempegowda International Airport terminal" 
            fill 
            className="object-cover opacity-50"
            priority
          />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-20">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary font-semibold text-sm mb-6 border border-primary/30 backdrop-blur-sm">
              Kempegowda International Airport (KIAL)
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Reliable <span className="text-primary">Bangalore Airport Taxi</span> Service
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Never miss a flight. Get guaranteed on-time airport pickup and drop services in Bangalore with fixed, transparent pricing and no surge fees.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="#booking-form" className="px-8 py-3.5 bg-primary text-dark font-bold rounded-xl hover:bg-primary-hover transition-all shadow-lg">
                Book Airport Cab
              </Link>
              <Link href="/pricing" className="px-8 py-3.5 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all backdrop-blur-sm border border-white/10">
                Check Flat Rates
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left Content Column */}
            <div className="lg:col-span-2">
              
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-dark mb-6">Stress-Free Bangalore Airport Transfers</h2>
                <div className="prose prose-lg text-gray-600 max-w-none">
                  <p className="mb-4">
                    Travelling to or from <strong>Kempegowda International Airport (KIAL)</strong> can be stressful due to distance and traffic. GNR Cabs Zone takes the anxiety out of airport travel with our dedicated Bangalore airport cab service.
                  </p>
                  <p>
                    Whether you need an early morning <strong>Bangalore airport pickup</strong> or a late-night <strong>Bangalore airport drop</strong>, our professional drivers ensure you reach the terminal or your home safely and precisely on time. 
                  </p>
                </div>
              </div>

              {/* Two Column Service Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden group hover:border-primary/50 transition-colors">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full -z-0 transition-transform group-hover:scale-110"></div>
                  <PlaneTakeoff className="w-10 h-10 text-primary mb-4 relative z-10" />
                  <h3 className="text-xl font-bold text-dark mb-3 relative z-10">Airport Drop (To Airport)</h3>
                  <p className="text-gray-600 text-sm relative z-10">
                    We pick you up from any location in Bangalore and drop you right at the departure gates. Pre-book your ride to ensure a cab is waiting at your doorstep at your specified time, completely avoiding last-minute app cancellations.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden group hover:border-secondary/50 transition-colors">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/10 rounded-bl-full -z-0 transition-transform group-hover:scale-110"></div>
                  <Plane className="w-10 h-10 text-secondary mb-4 relative z-10 transform rotate-90" />
                  <h3 className="text-xl font-bold text-dark mb-3 relative z-10">Airport Pickup (From Airport)</h3>
                  <p className="text-gray-600 text-sm relative z-10">
                    Arriving in Bangalore? Skip the long taxi queues. Provide us your flight details, and our driver will be waiting for you at the airport arrivals area, ready to help with your luggage and drive you safely to your destination.
                  </p>
                </div>
              </div>

              {/* Why Book Airport Taxi with us */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-dark mb-6">Why Book Your Airport Taxi With Us?</h3>
                
                <div className="space-y-4">
                  {[
                    { icon: ShieldCheck, title: "Fixed & Transparent Pricing", desc: "Our airport cab booking Bangalore features flat rates. You won't face sudden surge pricing, regardless of rain or peak hours. Toll charges are clearly communicated." },
                    { icon: Clock, title: "Guaranteed On-Time", desc: "We understand that flight schedules are strict. Our drivers dispatch early to ensure 100% on-time arrivals." },
                    { icon: MapPin, title: "Anywhere in Bangalore", desc: "Whether you live in Whitefield, Electronic City, J.P. Nagar, or Yelahanka, we service all pin codes." }
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row gap-4 bg-white p-6 rounded-2xl border border-gray-100">
                      <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center shrink-0">
                        <benefit.icon className="w-6 h-6 text-dark" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-dark mb-2">{benefit.title}</h4>
                        <p className="text-gray-600">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Sidebar - Sticky Booking Form */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <ContactForm defaultService="Airport Transfer" />
                
                <div className="mt-6 bg-primary/10 p-6 rounded-2xl border border-primary/20 text-center">
                  <h4 className="font-bold text-dark mb-2">Advance Booking</h4>
                  <p className="text-sm text-gray-700 mb-4">
                    For early morning flights (1 AM - 6 AM), we highly recommend booking your cab at least 12 hours in advance.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <FAQSection />
      <CTASection title="Book Your Airport Transfer Today" subtitle="Ensure a smooth start or end to your journey with Bangalore's most reliable airport taxi service." />
    </>
  );
}
