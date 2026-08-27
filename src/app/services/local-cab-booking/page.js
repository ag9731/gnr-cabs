import Image from 'next/image';
import { CheckCircle2, Shield, MapPin, Navigation, Car, CreditCard, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import ContactForm from '@/components/forms/ContactForm';
import CTASection from '@/components/sections/CTASection';
import FAQSection from '@/components/sections/FAQSection';

export const metadata = {
  title: "Local Cab Booking in Bangalore | Reliable City Taxis",
  description: "Book reliable and comfortable local taxis in Bangalore. Point-to-point drops, full-day city rentals, and safe city travel with GNR Cabs Zone.",
};

export default function LocalCabBooking() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-dark text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-transparent z-10"></div>
          <Image 
            src="/images/local_cab_hero.jpg" 
            alt="Local cab driving in Bangalore city" 
            fill 
            className="object-cover opacity-40"
            priority
          />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-20">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary font-semibold text-sm mb-6 border border-primary/30 backdrop-blur-sm">
              City Travel Made Easy
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Local Cab Booking in <span className="text-primary">Bangalore</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Navigate Bangalore's bustling streets with comfort and ease. Whether it's a quick trip for shopping, a daily commute, or a full-day city tour, our reliable local taxi service has you covered.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#booking-form" className="px-8 py-3.5 bg-primary text-dark font-bold rounded-xl hover:bg-primary-hover transition-all shadow-lg">
                Book Your Ride
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Sidebar */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Content Column */}
            <div className="lg:col-span-2">
              
              {/* Introduction */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-dark mb-6">Seamless Point-to-Point City Travel</h2>
                <div className="prose prose-lg text-gray-600 max-w-none">
                  <p className="mb-4">
                    Finding a reliable cab in Bangalore can sometimes be challenging, especially during peak hours. At GNR Cabs Zone, we simplify your city travel with our prompt and professional local cab booking service. 
                  </p>
                  <p>
                    From quick point-to-point drops in Koramangala or Indiranagar to full-day rentals for business meetings across the IT corridors of Whitefield and Electronic City, our fleet of well-maintained vehicles is ready when you are. Our drivers are well-versed with the local routes and traffic patterns, ensuring you reach your destination smoothly.
                  </p>
                </div>
              </div>

              {/* Use Cases Grid */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-dark mb-6">Popular Uses for Local Cabs</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { title: "Point-to-Point Drops", desc: "Quick and direct rides from your location to your destination." },
                    { title: "Full-Day Rentals", desc: "Hire a cab for 8 hours/80km or 12 hours/120km for multiple stops." },
                    { title: "Shopping Trips", desc: "Comfortable sedans with ample boot space for your shopping bags." },
                    { title: "City Sightseeing", desc: "Explore Bangalore's parks, palaces, and attractions comfortably." }
                  ].map((useCase, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="text-lg font-bold text-dark mb-2">{useCase.title}</h4>
                      <p className="text-sm text-gray-600">{useCase.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Benefits Split Section */}
              <div className="mb-16 bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm flex flex-col md:flex-row">
                <div className="p-8 md:w-1/2 flex flex-col justify-center bg-dark text-white">
                  <h3 className="text-2xl font-bold mb-4">Why Choose Us for Local Travel?</h3>
                  <p className="text-gray-400 mb-6">We prioritize your safety and comfort above all else in city traffic.</p>
                  <ul className="space-y-4">
                    {[
                      { icon: Shield, text: "Background-Verified Drivers" },
                      { icon: Car, text: "Clean & Sanitized Fleet" },
                      { icon: CreditCard, text: "Transparent Pricing" },
                      { icon: Navigation, text: "Expertise in Local Routes" }
                    ].map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <benefit.icon className="w-5 h-5 text-primary" />
                        <span className="font-medium">{benefit.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:w-1/2 relative min-h-[300px]">
                  {/* Reusing hero image for visual balance since it's highly relevant */}
                  <Image 
                    src="/images/local_cab_hero.jpg" 
                    alt="Safe cab travel" 
                    fill 
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Vehicle Options */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-dark mb-6">Our Local Fleet</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { name: "Sedan (Etios / Dzire)", pax: 4, type: "Comfortable" },
                    { name: "SUV (Innova)", pax: 6, type: "Spacious" },
                    { name: "Premium SUV (Crysta)", pax: 7, type: "Luxury" }
                  ].map((vehicle, idx) => (
                    <div key={idx} className="bg-white p-5 rounded-xl border border-gray-100 text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-3">
                        <Car className="w-6 h-6" />
                      </div>
                      <h4 className="font-bold text-dark mb-1">{vehicle.name}</h4>
                      <p className="text-xs text-gray-500">{vehicle.type} • Up to {vehicle.pax} Seats</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Sidebar - Sticky Booking Form */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <ContactForm defaultService="Local Cab Booking" />
                
                {/* How it works mini-card */}
                <div className="mt-6 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <h4 className="font-bold text-dark mb-4">How It Works</h4>
                  <ul className="space-y-4 relative before:absolute before:inset-0 before:ml-2.5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
                    <li className="relative flex items-center gap-4">
                      <div className="w-6 h-6 rounded-full bg-primary text-dark flex items-center justify-center font-bold text-xs shrink-0 z-10">1</div>
                      <p className="text-sm text-gray-600">Submit your details in the form.</p>
                    </li>
                    <li className="relative flex items-center gap-4">
                      <div className="w-6 h-6 rounded-full bg-primary text-dark flex items-center justify-center font-bold text-xs shrink-0 z-10">2</div>
                      <p className="text-sm text-gray-600">We confirm availability & price.</p>
                    </li>
                    <li className="relative flex items-center gap-4">
                      <div className="w-6 h-6 rounded-full bg-primary text-dark flex items-center justify-center font-bold text-xs shrink-0 z-10">3</div>
                      <p className="text-sm text-gray-600">Your cab arrives on time.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <FAQSection />
      <CTASection title="Need a Cab Right Now in Bangalore?" subtitle="Don't wait in long queues or deal with surge pricing. Call us directly for immediate local bookings." />
    </>
  );
}
