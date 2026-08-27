import Image from 'next/image';
import { CheckCircle2, Map, Clock, Compass, Car, MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import ContactForm from '@/components/forms/ContactForm';
import CTASection from '@/components/sections/CTASection';
import FAQSection from '@/components/sections/FAQSection';

export const metadata = {
  title: "Outstation Cab Booking from Bangalore | Premium Intercity Taxis",
  description: "Book premium outstation cabs from Bangalore for one-way or round trips. Comfortable long-distance travel to Mysore, Coorg, Ooty, and more.",
};

const popularDestinations = [
  { name: "Mysore", desc: "Heritage & Palaces", time: "3-4 Hours" },
  { name: "Coorg", desc: "Coffee Plantations", time: "5-6 Hours" },
  { name: "Ooty", desc: "Queen of Hill Stations", time: "6-7 Hours" },
  { name: "Chikmagalur", desc: "Lush Greenery", time: "4-5 Hours" },
  { name: "Wayanad", desc: "Nature Trails", time: "6-7 Hours" },
  { name: "Tirupati", desc: "Pilgrimage Center", time: "5-6 Hours" },
];

export default function OutstationCabBooking() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-dark text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-transparent z-10"></div>
          <Image 
            src="/images/outstation_cab_hero_1787778559435.jpg" 
            alt="Outstation cab on a scenic highway" 
            fill 
            className="object-cover opacity-50"
            priority
          />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-20">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary font-semibold text-sm mb-6 border border-primary/30 backdrop-blur-sm">
              Long-Distance Travel Experts
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Outstation Cab Booking <br />from <span className="text-primary">Bangalore</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Planning a weekend getaway or an intercity business trip? Book our comfortable, premium outstation taxis for one-way drops or round trips across South India.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="#booking-form" className="px-8 py-3.5 bg-primary text-dark font-bold rounded-xl hover:bg-primary-hover transition-all shadow-lg">
                Book Outstation Cab
              </Link>
              <Link href="/pricing" className="px-8 py-3.5 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all backdrop-blur-sm border border-white/10">
                View Per Km Tariff
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
                <h2 className="text-3xl font-bold text-dark mb-6">Comfortable Intercity Road Trips</h2>
                <div className="prose prose-lg text-gray-600 max-w-none">
                  <p className="mb-4">
                    Experience the joy of road trips without the fatigue of driving. Whether you're heading to the serene hills of Coorg or visiting family in Chennai, GNR Cabs Zone provides the perfect transportation solution.
                  </p>
                  <p>
                    We offer flexible booking options tailored to your itinerary. Our well-maintained SUVs and Sedans provide ample legroom, excellent AC cooling, and plenty of luggage space, ensuring that your long-distance journey is as comfortable and relaxing as possible.
                  </p>
                </div>
              </div>

              {/* Service Types */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm border-t-4 border-t-primary">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                    <Compass className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-3">Round Trip Cabs</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    Perfect for vacations and return business trips. Keep the cab with you for the entire duration of your outstation stay. Billed on a per-km basis with a minimum km/day requirement.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm border-t-4 border-t-secondary">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mb-6">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-3">One-Way Drops</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    Need to be dropped off in another city without paying for the return journey? We offer dedicated one-way intercity drops to major cities and towns around Karnataka and neighboring states.
                  </p>
                </div>
              </div>

              {/* Popular Destinations */}
              <div className="mb-16">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-dark">Popular Outstation Destinations</h3>
                  <Link href="/packages" className="text-primary font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                    View Tour Packages <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {popularDestinations.map((dest, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-xl border border-gray-100 flex flex-col justify-center items-center text-center group hover:border-primary transition-colors">
                      <h4 className="font-bold text-dark group-hover:text-primary transition-colors">{dest.name}</h4>
                      <p className="text-xs text-gray-500 mb-2">{dest.desc}</p>
                      <span className="text-[10px] font-semibold bg-gray-100 text-gray-600 px-2 py-1 rounded-full flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {dest.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-dark mb-6">Why Book Outstation With Us?</h3>
                <div className="space-y-4">
                  {[
                    { title: "Highly Experienced Highway Drivers", desc: "Our drivers have years of experience navigating state and national highways safely." },
                    { title: "Transparent Per-Km Billing", desc: "No hidden charges. Clear communication regarding toll, parking, and driver bata." },
                    { title: "Premium Maintained Fleet", desc: "Air-conditioned vehicles in excellent condition to prevent breakdowns during long trips." },
                    { title: "24/7 Roadside Assistance", desc: "We provide backend support throughout your journey for peace of mind." }
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-4 bg-white p-5 rounded-xl border border-gray-100">
                      <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-dark">{benefit.title}</h4>
                        <p className="text-sm text-gray-600 mt-1">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Sidebar - Sticky Booking Form */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <ContactForm defaultService="Outstation Taxi" />
                
                <div className="mt-6 bg-dark text-white p-6 rounded-2xl shadow-lg">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <Car className="w-5 h-5 text-primary" /> Recommended Vehicle
                  </h4>
                  <p className="text-sm text-gray-400 mb-4">
                    For outstation trips exceeding 300km, we highly recommend booking a Toyota Innova or Crysta for maximum comfort and space.
                  </p>
                  <Link href="/pricing" className="text-primary text-sm font-semibold hover:underline">
                    Check SUV Pricing →
                  </Link>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <FAQSection />
      <CTASection title="Ready for your next Road Trip?" subtitle="Contact us for competitive outstation rates and special round-trip packages." />
    </>
  );
}
