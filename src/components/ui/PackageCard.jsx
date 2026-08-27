import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';

export default function PackageCard({ pkg, type = 'outstation' }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full">
      <div className="relative h-48 w-full bg-gray-200 overflow-hidden">
        <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors z-10" />
        {pkg.image ? (
          <Image
            src={pkg.image}
            alt={pkg.title}
            fill
            className="object-cover transform group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 bg-gradient-to-br from-primary/30 to-secondary/30"></div>
        )}
        {pkg.distance && (
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-dark flex items-center gap-1 z-20 shadow-sm">
            <MapPin className="w-3 h-3" />
            {pkg.distance}
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-dark mb-2">{pkg.title}</h3>
        <p className="text-gray-600 text-sm mb-6 flex-1">{pkg.description}</p>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
          <div className="flex flex-col">
            <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Starting From</span>
            <span className="text-primary font-bold">{pkg.price}</span>
          </div>
          <Link
            href="/contact"
            className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-dark transition-colors"
          >
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
