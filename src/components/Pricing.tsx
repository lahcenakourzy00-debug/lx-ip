import { useState } from 'react';
import { Check } from 'lucide-react';
import PaymentModal from './PaymentModal';

const plans = [
  {
    name: '1 Month',
    price: '10.00',
    popular: false,
    features: [
      '15,000+ Live Channels',
      '40,000+ VODs (Movies & Series)',
      '4K, FHD & HD Quality',
      'Anti-Freeze Technology',
      'EPG TV Guide',
      '24/7 Dedicated Support'
    ]
  },
  {
    name: '3 Months',
    price: '30.00',
    popular: false,
    features: [
      '15,000+ Live Channels',
      '40,000+ VODs (Movies & Series)',
      '4K, FHD & HD Quality',
      'Anti-Freeze Technology',
      'EPG TV Guide',
      '24/7 Dedicated Support'
    ]
  },
  {
    name: '6 Months',
    price: '60.00',
    originalPrice: '71.94',
    popular: true,
    features: [
      '15,000+ Live Channels',
      '40,000+ VODs (Movies & Series)',
      '4K, FHD & HD Quality',
      'Anti-Freeze Technology',
      'EPG TV Guide',
      '24/7 Dedicated Support'
    ]
  },
  {
    name: '12 Months',
    price: '100.00',
    originalPrice: '143.88',
    popular: false,
    features: [
      'Everything in 6 Months',
      '3 Multi-Connections',
      'All PPV Included',
      'Personal Account Manager',
      'EPG TV Guide',
      '24/7 Priority Support'
    ]
  }
];

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<{name: string, price: string} | null>(null);

  return (
    <section id="pricing" className="py-24 relative overflow-hidden z-10 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Simple, Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-brand-wine">Pricing</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Choose the perfect plan for your entertainment needs. No hidden fees or contracts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <div 
              key={plan.name}
              className={`relative border rounded-2xl p-6 flex flex-col items-center text-center transition-all ${
                plan.popular 
                  ? 'bg-gradient-to-b from-brand-wine/30 to-black/10 border-2 border-brand-gold shadow-2xl shadow-brand-gold/10 scale-100 lg:scale-105 z-10' 
                  : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-brand-gold/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 px-3 py-1 bg-brand-gold text-black rounded-full text-[10px] uppercase font-bold tracking-widest">
                  Best Value
                </div>
              )}
              
              <div className="mb-6 w-full">
                <h3 className="text-lg font-bold mb-1">{plan.name} Plan</h3>
                <p className={`${plan.popular ? 'text-brand-gold' : 'text-gray-500'} text-xs mb-4 uppercase tracking-widest`}>
                  {plan.name} Access
                </p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-4xl font-black">${plan.price}</span>
                  {plan.originalPrice && (
                    <span className="text-gray-500 line-through text-sm">${plan.originalPrice}</span>
                  )}
                </div>
              </div>

              <ul className={`w-full space-y-3 mb-8 text-xs text-left ${plan.popular ? 'text-gray-200' : 'text-gray-300'}`}>
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-2">
                    <div className={`w-1 h-1 rounded-full ${plan.popular ? 'bg-brand-gold' : 'bg-brand-wine'}`}></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => setSelectedPlan({ name: plan.name, price: plan.price })}
                className={`w-full py-3 rounded-xl text-center text-sm font-bold transition-all hover:cursor-pointer ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-brand-wine to-brand-gold hover:from-brand-gold hover:to-brand-wine text-white shadow-lg shadow-brand-gold/40' 
                    : 'bg-white/10 border border-white/5 text-white hover:bg-white/20'
                }`}
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>

      <PaymentModal 
        isOpen={selectedPlan !== null}
        onClose={() => setSelectedPlan(null)}
        planName={selectedPlan?.name || ''}
        price={selectedPlan?.price || ''}
      />
    </section>
  );
}
