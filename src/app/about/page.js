import Image from 'next/image';
import { CheckCircle2, Shield, Clock, Users } from 'lucide-react';
import CTASection from '@/components/sections/CTASection';

export const metadata = {
  title: "About Us",
  description: "Learn more about GNR Cabs Zone, Bangalore's most trusted premium cab service offering safe, reliable, and comfortable travel solutions.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-dark text-white py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About GNR Cabs Zone</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Committed to providing safe, comfortable, and reliable cab services across Bangalore and outstation destinations.
          </p>
        </div>
      </section>

      {/* Our Story / Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Our Story</span>
              <h2 className="text-3xl font-bold text-dark mb-6">Redefining Travel in Bangalore</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At GNR CABS ZONE Tours and Travels, we believe that every journey should be as comfortable as the destination itself. We started with a simple vision: to provide a premium, reliable, and transparent cab booking experience for the people and visitors of Bangalore.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Today, we boast a diverse fleet of well-maintained vehicles, ranging from comfortable sedans to spacious buses, ensuring that whether you are travelling alone to the airport, or with a large group for a weekend getaway, we have the perfect vehicle for you.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="text-2xl font-bold text-dark mb-1">10k+</h4>
                  <p className="text-sm text-gray-500 font-medium">Happy Customers</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="text-2xl font-bold text-dark mb-1">100%</h4>
                  <p className="text-sm text-gray-500 font-medium">Safety Record</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              {/* Image Placeholder */}
              <div className="aspect-[4/3] bg-gray-100 rounded-3xl overflow-hidden relative shadow-lg">
                 <Image 
                   src="/images/outstation_cab_hero.jpg"
                   alt="Premium Cab Service Fleet"
                   fill
                   className="object-cover"
                 />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-dark font-bold">Trusted Agency</p>
                    <p className="text-gray-500 text-sm">Verified & Certified</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Why We Stand Out</span>
            <h2 className="text-3xl font-bold text-dark mb-4">Our Core Values</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Safety First",
                desc: "Your safety is our priority. All vehicles are regularly inspected, sanitized, and driven by background-verified professionals."
              },
              {
                icon: Clock,
                title: "Reliability & Punctuality",
                desc: "We value your time. Our drivers always arrive on schedule, ensuring you never miss a flight, meeting, or precious vacation time."
              },
              {
                icon: Users,
                title: "Customer-Centric",
                desc: "We believe in transparent pricing with no hidden costs and provide 24/7 support to assist you at every step of your journey."
              }
            ].map((value, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-lg hover:-translate-y-1 transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-4">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
