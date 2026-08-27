import { Phone, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';
import ContactForm from '@/components/forms/ContactForm';
import { contactInfo } from '@/data/contact';

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with GNR Cabs Zone for booking enquiries, support, or any questions about our cab services in Bangalore.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-dark text-white py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We are here to help 24/7. Reach out to us for bookings or queries.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Details */}
            <div>
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Get In Touch</span>
              <h2 className="text-3xl font-bold text-dark mb-8">How can we help you today?</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-dark mb-1">Call Us (24/7 Support)</h4>
                    {contactInfo.phones.map((phone, i) => (
                      <p key={i} className="text-gray-600 mb-1">
                        <a href={`tel:${phone.replace(/[^0-9+]/g, '')}`} className="hover:text-primary transition-colors">{phone}</a>
                      </p>
                    ))}
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-dark mb-1">Email Us</h4>
                    <p className="text-gray-600">
                      <a href={`mailto:${contactInfo.email}`} className="hover:text-primary transition-colors">{contactInfo.email}</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-dark mb-1">Office Location</h4>
                    <p className="text-gray-600 leading-relaxed max-w-sm">
                      {contactInfo.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="mt-12 w-full h-64 bg-gray-200 rounded-2xl overflow-hidden border border-gray-100 flex items-center justify-center relative">
                 <Image 
                   src="/images/local_cab_hero.jpg"
                   alt="GNR Cabs Contact Us"
                   fill
                   className="object-cover"
                 />
              </div>
            </div>

            {/* Form */}
            <div>
               <ContactForm />
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}
