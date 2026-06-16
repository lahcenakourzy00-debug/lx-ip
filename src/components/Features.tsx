import { Globe, LayoutGrid, ShieldCheck, Zap } from 'lucide-react';

const features = [
  {
    icon: Globe,
    title: 'Global Channels',
    description: 'Over 15,000 live channels worldwide including sports, news, and entertainment in top quality.'
  },
  {
    icon: Zap,
    title: 'Anti-Buffer Tech',
    description: 'Our high-speed dedicated servers guarantee a stable, uninterrupted, and buffer-free stream.'
  },
  {
    icon: LayoutGrid,
    title: 'Huge VOD Library',
    description: 'Access a massive, constantly updated library of Movies and TV Series with multiple subtitles.'
  },
  {
    icon: ShieldCheck,
    title: 'Secure & Private',
    description: 'Your connection is 100% secure. Enjoy private viewing without tracking or ISP throttling.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white/[0.02] border-y border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Everything you need for <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-brand-wine">limitless streaming.</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Say goodbye to expensive cable bills. Experience the next generation of television.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 hover:border-brand-gold/50 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-gray-300 group-hover:text-brand-gold group-hover:bg-brand-gold/10 transition-colors">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
