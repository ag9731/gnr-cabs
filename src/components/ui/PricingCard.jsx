import Link from 'next/link';
import Image from 'next/image';
import { Check } from 'lucide-react';

export default function PricingCard({ type, vehicle, specs, price, features = [], isPopular = false, image }) {
  return (
    <div className={`relative bg-white rounded-2xl p-6 md:p-8 transition-all duration-300 ${
      isPopular 
        ? 'border-2 border-primary shadow-xl scale-100 md:scale-105 z-10' 
        : 'border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1'
    }`}>
      {isPopular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-dark px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          Most Popular
        </div>
      )}
      
      <div className="text-center mb-6 border-b border-gray-100 pb-6">
        {image && (
          <div className="relative w-full h-40 mx-auto mb-6 rounded-xl overflow-hidden shadow-sm group">
            <div className="absolute inset-0 bg-dark/10 group-hover:bg-transparent transition-colors z-10"></div>
            <Image src={image} alt={vehicle} fill className="object-cover transform group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
          </div>
        )}
        <h3 className="text-2xl font-bold text-dark mb-1">{vehicle}</h3>
        <p className="text-gray-500 text-sm">{specs}</p>
        <div className="mt-4 flex items-end justify-center gap-1">
          <span className="text-4xl font-extrabold text-dark">₹{price}</span>
          {type === 'outstation' && <span className="text-gray-500 text-sm mb-1">/ km</span>}
        </div>
      </div>
      
      <ul className="space-y-4 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
            <Check className="w-5 h-5 text-primary shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <Link
        href="/#booking-form"
        className={`block w-full py-3 rounded-xl font-bold text-center transition-colors ${
          isPopular 
            ? 'bg-primary text-dark hover:bg-primary-hover' 
            : 'bg-gray-100 text-dark hover:bg-primary hover:text-dark'
        }`}
      >
        Book {vehicle}
      </Link>
    </div>
  );
}
