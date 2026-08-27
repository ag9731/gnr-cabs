import PricingCard from '@/components/ui/PricingCard';
import CTASection from '@/components/sections/CTASection';
import { outstationPricing, airportPricing, hourlyPricing } from '@/data/pricing';
import { vehicles } from '@/data/vehicles';
export const metadata = {
  title: "Pricing & Tariffs",
  description: "Transparent and affordable cab pricing for outstation trips, airport transfers, and hourly rentals in Bangalore.",
};

export default function PricingPage() {
  return (
    <>
      <section className="bg-dark text-white py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Transparent Pricing</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            No hidden charges. Clear billing. Choose the best plan for your travel needs.
          </p>
        </div>
      </section>

      {/* Outstation Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Long Distance</span>
            <h2 className="text-3xl font-bold text-dark mb-4">Outstation Cabs Tariff</h2>
            <p className="text-gray-600">Billing based on per km rate. Minimum 300 km per day billing.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
        </div>
      </section>

      {/* Airport Pricing */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Airport Transfers</span>
            <h2 className="text-3xl font-bold text-dark mb-4">Fixed Airport Taxi Rates</h2>
            <p className="text-gray-600">Hassle-free Kempegowda International Airport (KIAL) pickup & drop.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {airportPricing.map((item, idx) => {
              const vehicleData = vehicles.find(v => v.id === item.vehicleId);
              return (
                <PricingCard 
                  key={idx}
                  type="airport"
                  vehicle={vehicleData ? vehicleData.name : item.vehicleId.toUpperCase()}
                  specs="AC Cab"
                  price={item.basicPrice}
                  image={vehicleData?.image}
                  features={[
                    "Fixed Price",
                    `Toll: ₹${item.toll} (approx)`,
                    "No Peak Time Surge"
                  ]}
                />
              )
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
