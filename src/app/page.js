import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Clock, MapPin, ThumbsUp } from 'lucide-react';
import ContactForm from '@/components/forms/ContactForm';
import ServiceCard from '@/components/ui/ServiceCard';
import PackageCard from '@/components/ui/PackageCard';
import VehicleCard from '@/components/ui/VehicleCard';
import PricingCard from '@/components/ui/PricingCard';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/sections/CTASection';
import { services } from '@/data/services';
import { vehicles } from '@/data/vehicles';
import { outstationPackages } from '@/data/packages';
import { outstationPricing } from '@/data/pricing';
import { contactInfo } from '@/data/contact';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-40 overflow-hidden bg-dark">
        {/* Background image overlay placeholder */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/90 to-transparent z-10"></div>
          <Image 
            src="/images/outstation_cab_hero.jpg"
            alt="Premium outstation cab in Bangalore"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Hero Content */}
            <div className="text-white">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary font-semibold text-sm mb-6 border border-primary/30 backdrop-blur-sm">
                #1 Cab Service in Bangalore
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Premium & Reliable <br />
                <span className="text-primary">Cab Booking</span> in Bangalore
              </h1>
              <p className="text-gray-300 text-lg mb-8 max-w-xl leading-relaxed">
                Experience safe, comfortable, and affordable travel. Whether it's a local trip, airport transfer, or an outstation weekend getaway, we've got you covered.
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <a href="#booking-form" className="px-8 py-3.5 bg-primary text-dark font-bold rounded-xl hover:bg-primary-hover hover:-translate-y-1 transition-all shadow-lg shadow-primary/25">
                  Book a Cab
                </a>
                <a href={`tel:${contactInfo.primaryPhone}`} className="px-8 py-3.5 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 hover:-translate-y-1 transition-all backdrop-blur-md border border-white/10">
                  Call {contactInfo.phones[0]}
                </a>
              </div>
              
              {/* Trust Indicators */}
              <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-6 md:gap-12">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white font-bold">100% Safe</p>
                    <p className="text-gray-400 text-xs">Verified Drivers</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white font-bold">24/7</p>
                    <p className="text-gray-400 text-xs">Always Available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Booking Form */}
            <div className="lg:pl-10">
              <ContactForm defaultService="Local Cab Booking" />
            </div>

          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Welcome to GNR Cabs Zone</span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6 leading-tight">Your Ultimate Travel Partner in Bangalore & Beyond</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Whether you need a quick ride across town, a reliable airport transfer, or a comfortable vehicle for a weekend getaway, GNR Cabs Zone offers premium transportation solutions at affordable prices.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                With a modern fleet ranging from sleek sedans to spacious buses, and a team of professional, background-verified drivers, we guarantee a safe and memorable journey every time you ride with us.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                Learn More About Us <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg mt-8">
                  <Image src="/images/local_cab_hero.jpg" alt="Local Cabs" fill className="object-cover" />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                  <Image src="/images/corporate_cabs_hero.jpg" alt="Corporate Cabs" fill className="object-cover" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                  <Image src="/images/trip_packages_hero.jpg" alt="Outstation Cabs" fill className="object-cover" />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                  <Image src="/images/airport_taxi_hero.jpg" alt="Airport Taxi" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Our Premium Cab Services</h2>
            <p className="text-gray-600">From quick city drops to long scenic journeys, GNR Cabs provides top-tier transportation solutions tailored for you.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Packages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div className="max-w-2xl">
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Top Destinations</span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Popular Outstation Packages</h2>
              <p className="text-gray-600">Explore the beauty of South India with our specially curated, affordable trip packages from Bangalore.</p>
            </div>
            <Link href="/packages" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
              View All Packages <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {outstationPackages.map(pkg => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/packages" className="inline-flex items-center justify-center px-8 py-3.5 bg-dark text-white font-bold rounded-xl hover:bg-gray-800 transition-colors">
              View All Packages
            </Link>
          </div>
        </div>
      </section>

      {/* How Booking Works */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Simple Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">How It Works</h2>
            <p className="text-gray-600">Booking a cab with us is quick and hassle-free in just three simple steps.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -z-10 -translate-y-12"></div>
            
            {[
              { step: '01', title: 'Request a Ride', desc: 'Fill out our quick booking form or call us directly with your travel details.' },
              { step: '02', title: 'Confirm Vehicle', desc: 'We will confirm your booking and assign the perfect, well-maintained vehicle.' },
              { step: '03', title: 'Enjoy Journey', desc: 'Our driver arrives on time to ensure you have a safe and comfortable trip.' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 text-center relative hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-primary text-dark font-bold text-2xl rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/30">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-dark text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Why GNR Cabs Zone</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Your Trusted Travel Partner in Bangalore</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                We don't just offer rides; we offer peace of mind. With years of experience in the travel industry, we understand what makes a journey truly comfortable.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: ShieldCheck, title: 'Professional Drivers', desc: 'Courteous, experienced, and background-verified drivers.' },
                  { icon: ThumbsUp, title: 'Clean & Sanitized Fleet', desc: 'Well-maintained vehicles ensuring a hygienic travel experience.' },
                  { icon: MapPin, title: 'Transparent Pricing', desc: 'No hidden charges. Clear billing for local and outstation trips.' },
                  { icon: Clock, title: 'On-Time Service', desc: 'Punctuality is our priority. Never miss a flight or meeting.' },
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-400">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-primary rounded-3xl transform rotate-3 scale-105 opacity-20"></div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl relative z-10 border border-white/10 overflow-hidden aspect-[4/3]">
                <Image 
                  src="/images/corporate_cabs_hero.jpg"
                  alt="Professional fleet and drivers"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outstation Pricing Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Our Fleet & Tariffs</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Choose Your Perfect Ride</h2>
            <p className="text-gray-600">From comfortable sedans for city travel to spacious buses for group tours, we have a vehicle for every need with transparent pricing.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {outstationPricing.map((item, idx) => {
              const vehicleData = vehicles.find(v => v.id === item.vehicleId);
              return (
                <PricingCard 
                  key={idx}
                  type="outstation"
                  vehicle={vehicleData ? vehicleData.name : item.vehicleId.toUpperCase()}
                  specs="AC Cab"
                  price={item.pricePerKm}
                  isPopular={item.vehicleId === 'innova'}
                  image={vehicleData?.image}
                  features={[
                    `Driver Bata: ₹${item.bataPerDay} / day`,
                    `Min billing: ${item.minKmPerDay} km / day`,
                    item.extra
                  ]}
                />
              )
            })}
          </div>
          
          <div className="text-center">
            <Link href="/pricing" className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-dark text-dark font-bold rounded-xl hover:bg-dark hover:text-white transition-colors">
              View Full Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ & Final CTA */}
      <FAQSection />
      <CTASection />
    </>
  );
}
