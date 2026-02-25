import Link from 'next/link';
import {
  Wrench, CheckCircle, Star, Clock, Shield, ArrowRight,
  Smartphone, Monitor, Wind, Tv, Waves, Battery,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SERVICES } from '@/lib/data/services';
import { formatCurrency } from '@/lib/utils';
const CATEGORY_ICONS: Record<string, React.ElementType> = {
  mobile: Smartphone, laptop: Monitor, ac: Wind, tv: Tv, appliance: Waves, other: Battery,
};
const STATS = [
  { value: '5,000+', label: 'Repairs Done' },
  { value: '4.9★', label: 'Average Rating' },
  { value: '24hr', label: 'Avg Turnaround' },
  { value: '2 Year', label: 'Warranty' },
];
const HOW_IT_WORKS = [
  { step: '01', title: 'Book Online', description: 'Fill out our simple booking form with your device details and issue.' },
  { step: '02', title: 'Drop Off Device', description: 'Bring your device to our shop at your convenience.' },
  { step: '03', title: 'We Repair It', description: 'Our certified technicians diagnose and fix your device.' },
  { step: '04', title: 'Pick Up', description: 'Collect your fully repaired device and get back to life.' },
];
const TESTIMONIALS = [
  { name: 'Rahul S.', rating: 5, text: 'Got my iPhone screen replaced in under 2 hours. Excellent service and very fair pricing!', device: 'iPhone 13 Pro' },
  { name: 'Priya K.', rating: 5, text: 'My laptop was completely dead. The team fixed a motherboard issue that others said was impossible!', device: 'Dell XPS 15' },
  { name: 'Amit M.', rating: 5, text: 'AC service was quick and thorough. My unit cools like new. Great communication throughout.', device: 'Daikin Split AC' },
];
const featuredServices = SERVICES.slice(0, 6);
export default function HomePage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-500/30 border border-blue-400/30 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
                <CheckCircle className="h-4 w-4" />
                Trusted by 5,000+ customers
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Fast &amp; Reliable<br />
                <span className="text-amber-400">Device Repairs</span>
              </h1>
              <p className="text-lg text-blue-100 mb-8 max-w-xl">
                Expert repair services for mobiles, laptops, ACs, TVs, and home appliances. Same-day service with transparent pricing and 2-year warranty.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/booking">
                  <Button size="lg" className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold">
                    Book a Repair <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/track">
                  <Button size="lg" className="border border-white/30 bg-white/10 text-white hover:bg-white/20">
                    Track My Order
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <div className="bg-white/10 border border-white/20 rounded-3xl p-10 flex flex-col items-center gap-6">
                <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-amber-400/20 border border-amber-400/30">
                  <Wrench className="h-12 w-12 text-amber-400" />
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">Expert Repairs</p>
                  <p className="text-blue-200 text-sm mt-1">All devices, all brands</p>
                </div>
                <div className="grid grid-cols-2 gap-3 w-full">
                  {['Mobile', 'Laptop', 'AC', 'TV'].map((item) => (
                    <div key={item} className="bg-white/10 rounded-xl px-4 py-2.5 text-center text-sm font-medium">{item}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-3xl font-bold text-blue-700">{value}</p>
                <p className="text-sm text-gray-500 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">We repair everything from smartphones to home appliances.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => {
              const Icon = CATEGORY_ICONS[service.category] ?? Wrench;
              return (
                <Link key={service.id} href={`/booking?service=${service.id}`}>
                  <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-md hover:border-blue-200 transition-all duration-200 cursor-pointer group">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-4 group-hover:bg-blue-100 transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">{service.name}</h3>
                    <p className="text-sm text-gray-500 mb-3">{service.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-blue-700">From {formatCurrency(service.priceFrom)}</span>
                      <span className="text-xs text-gray-400">{service.duration}</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link href="/services">
              <Button variant="outline" size="lg">View All Services <ArrowRight className="h-5 w-5" /></Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-500">Get your device fixed in 4 simple steps</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {HOW_IT_WORKS.map(({ step, title, description }) => (
              <div key={step} className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-700 text-white text-xl font-bold mb-4">{step}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map(({ name, rating, text, device }) => (
              <div key={name} className="bg-white rounded-2xl border border-gray-200 p-6">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm mb-4">&quot;{text}&quot;</p>
                <p className="font-semibold text-gray-900">{name}</p>
                <p className="text-xs text-gray-400">{device}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 md:py-20 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to get your device fixed?</h2>
          <p className="text-lg text-blue-200 mb-8 max-w-xl mx-auto">Book a repair in minutes. Our experts are ready to help.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/booking">
              <Button size="lg" className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold">
                Book a Repair Now <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" className="border border-white/30 bg-white/10 text-white hover:bg-white/20">Contact Us</Button>
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[{ icon: Shield, text: '2 Year Warranty' }, { icon: Clock, text: 'Same Day Service' }, { icon: CheckCircle, text: 'Certified Technicians' }].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center justify-center gap-2 text-blue-200 text-sm">
                <Icon className="h-4 w-4 text-amber-400" /> {text}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
