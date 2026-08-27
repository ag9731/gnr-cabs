import ServiceCard from '@/components/ui/ServiceCard';
import CTASection from '@/components/sections/CTASection';
import { services } from '@/data/services';

export const metadata = {
  title: "Our Services",
  description: "Explore the premium cab booking services offered by GNR Cabs Zone including local rides, outstation trips, airport transfers, and corporate rentals.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-dark text-white py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive transportation solutions tailored for your comfort, safety, and budget.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
