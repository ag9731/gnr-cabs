import { Users, Briefcase, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function VehicleCard({ vehicle }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      <div className="w-full h-40 bg-gray-100 rounded-xl mb-6 relative overflow-hidden flex items-center justify-center group">
        <div className="absolute inset-0 bg-dark/10 group-hover:bg-transparent transition-colors z-10"></div>
        {vehicle.image ? (
          <Image 
            src={vehicle.image} 
            alt={vehicle.name} 
            fill 
            className="object-cover transform group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-gray-50"></div>
            <span className="relative z-10 text-gray-400 font-bold">{vehicle.type}</span>
          </>
        )}
      </div>
      
      <div className="flex-1">
        <h3 className="text-xl font-bold text-dark mb-1">{vehicle.name}</h3>
        <p className="text-primary font-semibold text-sm mb-4">{vehicle.type}</p>
        
        <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
          <div className="flex items-center gap-1.5">
            <Users className="w-4 h-4 text-gray-400" />
            <span>{vehicle.capacity}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Briefcase className="w-4 h-4 text-gray-400" />
            <span>{vehicle.luggage}</span>
          </div>
        </div>
        
        <div className="flex items-start gap-2 text-sm text-gray-600 mb-6 bg-gray-50 p-3 rounded-lg">
          <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
          <p>{vehicle.useCase}</p>
        </div>
      </div>
      
      <Link
        href="/#booking-form"
        className="w-full py-2.5 rounded-xl border-2 border-primary text-dark font-semibold hover:bg-primary transition-colors flex items-center justify-center"
      >
        Book Now
      </Link>
    </div>
  );
}
