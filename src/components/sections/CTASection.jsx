import Link from 'next/link';
import { PhoneCall, MessageCircle } from 'lucide-react';
import { contactInfo } from '@/data/contact';

export default function CTASection({ 
  title = "Ready to Book Your Ride in Bangalore?", 
  subtitle = "Experience the best cab service in town with affordable pricing and professional drivers." 
}) {
  return (
    <section className="py-20 bg-dark relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {title}
          </h2>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/#booking-form"
              className="w-full sm:w-auto px-8 py-4 bg-primary text-dark font-bold rounded-xl hover:bg-primary-hover hover:scale-105 transition-all shadow-lg flex items-center justify-center gap-2"
            >
              Book Now
            </Link>
            <a 
              href={`tel:${contactInfo.primaryPhone}`}
              className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all backdrop-blur-sm border border-white/10 flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-5 h-5" />
              Call {contactInfo.phones[0]}
            </a>
            <a 
              href={contactInfo.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-500/20"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
