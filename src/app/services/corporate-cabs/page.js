import Image from 'next/image';
import { CheckCircle2, Briefcase, Users, Building, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import ContactForm from '@/components/forms/ContactForm';
import CTASection from '@/components/sections/CTASection';
import FAQSection from '@/components/sections/FAQSection';

export const metadata = {
  title: "Corporate Cabs in Bangalore | Premium Business Travel",
  description: "Professional corporate transportation and executive cab services in Bangalore. Reliable B2B travel solutions for meetings, airport transfers, and events.",
};

export default function CorporateCabs() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-dark text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-transparent z-10"></div>
          <Image 
            src="/images/corporate_cabs_hero.jpg" 
            alt="Business professionals entering a premium corporate cab" 
            fill 
            className="object-cover opacity-50 grayscale-[30%]"
            priority
          />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-20">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-sm bg-white/10 text-white font-semibold text-sm mb-6 border border-white/20 backdrop-blur-sm uppercase tracking-widest">
              B2B Travel Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Premium Corporate <br />Cabs in <span className="text-primary">Bangalore</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Elevate your business travel. We provide reliable, professional, and discreet corporate transportation solutions for executives, clients, and company events.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="#booking-form" className="px-8 py-3.5 bg-primary text-dark font-bold rounded-sm hover:bg-primary-hover transition-all shadow-lg">
                Enquire Now
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
                <h2 className="text-3xl font-bold text-dark mb-6">Empowering Your Business Mobility</h2>
                <div className="prose prose-lg text-gray-600 max-w-none">
                  <p className="mb-4">
                    In the corporate world, time is money, and first impressions matter. GNR Cabs Zone provides tailored corporate cab services designed to meet the rigorous demands of business professionals and companies in Bangalore.
                  </p>
                  <p>
                    Whether you need a premium sedan to pick up an important VIP client from the airport, a comfortable SUV for an intercity business meeting, or reliable daily transportation for your executives, our corporate fleet is at your service.
                  </p>
                </div>
              </div>

              {/* Corporate Services Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
                {[
                  { icon: Briefcase, title: "Executive Travel", desc: "Premium, spotless vehicles with professional chauffeurs for your senior executives and VIP guests." },
                  { icon: Building, title: "Client Airport Transfers", desc: "Impress your clients from the moment they land with our punctual, meet-and-greet airport services." },
                  { icon: Users, title: "Corporate Events", desc: "Reliable transportation logistics for your team outings, conferences, and corporate offsites." },
                  { icon: ShieldCheck, title: "Outstation Meetings", desc: "Comfortable and quiet vehicles allowing you to work or relax during long-distance business trips." }
                ].map((service, idx) => (
                  <div key={idx} className="bg-white p-6 border-l-4 border-l-dark shadow-sm">
                    <service.icon className="w-8 h-8 text-dark mb-4" />
                    <h3 className="text-lg font-bold text-dark mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-600">{service.desc}</p>
                  </div>
                ))}
              </div>

              {/* Why Choose Us for Corporate */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-dark mb-6">The Corporate Advantage</h3>
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                  <table className="w-full text-left border-collapse">
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <th className="py-4 px-6 bg-gray-50 font-semibold text-dark w-1/3">Professional Chauffeurs</th>
                        <td className="py-4 px-6 text-gray-600">Our drivers are well-groomed, strictly punctual, discreet, and highly trained in corporate etiquette.</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <th className="py-4 px-6 bg-gray-50 font-semibold text-dark w-1/3">Premium Fleet</th>
                        <td className="py-4 px-6 text-gray-600">A wide selection of top-condition Sedans (Dzire, Etios) and premium SUVs (Innova Crysta) to suit your exact requirements.</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <th className="py-4 px-6 bg-gray-50 font-semibold text-dark w-1/3">Reliability</th>
                        <td className="py-4 px-6 text-gray-600">Zero cancellations and guaranteed vehicle availability for advance corporate bookings.</td>
                      </tr>
                      <tr>
                        <th className="py-4 px-6 bg-gray-50 font-semibold text-dark w-1/3">Transparent Billing</th>
                        <td className="py-4 px-6 text-gray-600">Clear invoicing with GST compliance for easy expense management and corporate accounting.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

            </div>

            {/* Right Sidebar - Sticky Booking Form */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                {/* Custom styling for the form container to look more corporate */}
                <div className="bg-white p-1 rounded-2xl shadow-xl border border-gray-200">
                  <div className="p-2">
                    <ContactForm defaultService="Corporate Cabs" />
                  </div>
                </div>
                
                <div className="mt-6 bg-dark text-white p-6 rounded-2xl text-center">
                  <h4 className="font-bold mb-2">Partner With Us</h4>
                  <p className="text-sm text-gray-400 mb-4">
                    Looking for a dependable travel partner for your organization? Contact us to discuss your corporate travel needs.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <FAQSection />
      <CTASection title="Elevate Your Business Travel" subtitle="Experience the highest standard of corporate transportation in Bangalore." />
    </>
  );
}
