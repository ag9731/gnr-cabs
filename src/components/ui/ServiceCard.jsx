import Link from 'next/link';
import { ArrowRight, MapPin, Car, Plane, Briefcase, Map } from 'lucide-react';

const iconMap = {
  MapPin: MapPin,
  Car: Car,
  Plane: Plane,
  Briefcase: Briefcase,
  Map: Map
};

export default function ServiceCard({ service }) {
  const Icon = iconMap[service.icon] || Car;

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-dark transition-colors">
        <Icon className="w-7 h-7" />
      </div>
      <h3 className="text-xl font-bold text-dark mb-3">{service.title}</h3>
      <p className="text-gray-600 mb-6 text-sm leading-relaxed">{service.shortDesc}</p>
      <Link 
        href={`/services/${service.slug}`}
        className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
      >
        Read More <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
