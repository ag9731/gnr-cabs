import PackageCard from '@/components/ui/PackageCard';
import CTASection from '@/components/sections/CTASection';
import { outstationPackages, localPackages } from '@/data/packages';

export const metadata = {
  title: "Tour Packages",
  description: "Affordable and customized tour packages for local sightseeing in Bangalore and outstation trips to Mysore, Coorg, Ooty, and more.",
};

export default function PackagesPage() {
  return (
    <>
      <section className="bg-dark text-white py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tour Packages</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore beautiful destinations with our specially curated travel packages.
          </p>
        </div>
      </section>

      {/* Outstation Packages */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Weekend Getaways</span>
            <h2 className="text-3xl font-bold text-dark mb-4">Outstation Tour Packages</h2>
            <p className="text-gray-600">Enjoy comfortable long-distance travel to the best hill stations, heritage sites, and beaches around South India.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {outstationPackages.map(pkg => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Local Packages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">City Tours</span>
            <h2 className="text-3xl font-bold text-dark mb-4">Bangalore Local Sightseeing</h2>
            <p className="text-gray-600">Discover the charm of the Garden City and its nearby attractions.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {localPackages.map(pkg => (
              <PackageCard key={pkg.id} pkg={pkg} type="local" />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
