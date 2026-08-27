import Image from 'next/image';
import { CheckCircle2, Map, Camera, Route, Compass, Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import ContactForm from '@/components/forms/ContactForm';
import CTASection from '@/components/sections/CTASection';
import FAQSection from '@/components/sections/FAQSection';
import PackageCard from '@/components/ui/PackageCard';
import { outstationPackages, localPackages } from '@/data/packages';

export const metadata = {
  title: "Bangalore Tour Packages & Sightseeing | GNR Cabs Zone",
  description: "Customized Bangalore tour packages and outstation sightseeing trips. Book comfortable cabs for your vacations to Mysore, Coorg, Ooty, and more.",
};

export default function TripPackages() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-dark text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/70 to-transparent z-10"></div>
          <Image 
            src="/images/trip_packages_hero.jpg" 
            alt="Scenic view of South Indian hill station" 
            fill 
            className="object-cover opacity-60"
            priority
          />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-20">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary font-semibold text-sm mb-6 border border-primary/30 backdrop-blur-sm">
              Discover South India
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Curated <span className="text-primary">Tour Packages</span> & Sightseeing
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Explore the breathtaking beauty of Karnataka, Kerala, and Tamil Nadu with our customized outstation tour packages and local Bangalore sightseeing trips.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="#destinations" className="px-8 py-3.5 bg-primary text-dark font-bold rounded-xl hover:bg-primary-hover transition-all shadow-lg">
                Explore Packages
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
                <h2 className="text-3xl font-bold text-dark mb-6">Your Dream Vacation Starts Here</h2>
                <div className="prose prose-lg text-gray-600 max-w-none">
                  <p className="mb-4">
                    Ready for a holiday? GNR Cabs Zone takes the stress out of travel planning. We offer comprehensive cab-based sightseeing packages to some of the most beautiful destinations around Bangalore. 
                  </p>
                  <p>
                    Unlike rigid bus tours, our private cab packages give you the freedom to explore at your own pace. Stop where you want, take pictures when you want, and enjoy the journey with your family in the comfort of a dedicated, air-conditioned vehicle.
                  </p>
                </div>
              </div>

              {/* Package Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
                {[
                  { icon: Route, title: "Custom Itineraries", desc: "Plan the trip your way." },
                  { icon: Map, title: "Local Drivers", desc: "Drivers who know the best spots." },
                  { icon: Camera, title: "Flexible Stops", desc: "Take breaks whenever you wish." }
                ].map((feature, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 text-center shadow-sm">
                    <feature.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-bold text-dark mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.desc}</p>
                  </div>
                ))}
              </div>

              {/* Destinations Section */}
              <div id="destinations" className="mb-16 scroll-mt-24">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-dark">Popular Tour Packages</h3>
                  <Link href="/packages" className="text-primary font-bold hidden sm:flex items-center gap-1 hover:gap-2 transition-all">
                    View All <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* We slice the first 4 for display on this service page */}
                  {outstationPackages.slice(0, 4).map(pkg => (
                    <PackageCard key={pkg.id} pkg={pkg} />
                  ))}
                </div>
              </div>

              {/* Bangalore Sightseeing */}
              <div className="mb-12 bg-dark rounded-3xl p-8 md:p-10 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                <div className="relative z-10">
                  <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2 block">City Tours</span>
                  <h3 className="text-3xl font-bold mb-4">Bangalore Local Sightseeing</h3>
                  <p className="text-gray-300 mb-8 max-w-lg">
                    Short on time? Explore the Garden City's best attractions in a single day. Visit Lalbagh, Cubbon Park, Vidhana Soudha, Bangalore Palace, and more in a comfortable AC cab.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3"><CheckCircle2 className="text-primary w-5 h-5" /> 8 Hours / 80 Km Package</li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="text-primary w-5 h-5" /> 12 Hours / 120 Km Package</li>
                  </ul>
                  <Link href="/packages" className="inline-block px-6 py-3 bg-white text-dark font-bold rounded-xl hover:bg-gray-100 transition-colors">
                    View City Packages
                  </Link>
                </div>
              </div>

            </div>

            {/* Right Sidebar - Sticky Booking Form */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <ContactForm defaultService="Tour Package" />
                
                <div className="mt-6 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-dark mb-2">Need a Custom Package?</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Have a specific multi-day itinerary in mind? Fill out the form above with your travel dates and destinations, and we'll provide a custom quote!
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <FAQSection />
      <CTASection title="Ready for a Vacation?" subtitle="Book your cab and sightseeing tour with GNR Cabs Zone today." />
    </>
  );
}
