import { MonitorPlay, Smartphone, Tv } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-wine/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-brand-gold/20 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.2em] font-semibold text-brand-gold mb-8 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
            </span>
            Premium Streaming Service
          </div>
          <h1 className="font-display font-bold text-5xl md:text-7xl leading-[1.1] tracking-tight mb-6">
            The Ultimate <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-brand-wine">
              Entertainment.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-xl">
            Access thousands of live premium channels, movies, and TV shows in stunning 4K. Enjoy buffer-free entertainment on any device, anywhere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#pricing"
              className="inline-flex justify-center items-center h-14 px-8 rounded-xl bg-gradient-to-r from-brand-wine to-brand-gold hover:from-brand-gold hover:to-brand-wine text-white font-bold text-sm shadow-lg shadow-brand-wine/40 transition-all font-sans"
            >
              Start Watching Now
            </a>
            <a 
              href="#features"
              className="inline-flex justify-center items-center h-14 px-8 rounded-xl bg-white/10 border border-white/5 text-white font-bold text-sm hover:bg-white/20 transition-all font-sans"
            >
              Explore Features
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative lg:h-[600px] flex items-center justify-center pointer-events-none"
        >
          <div className="relative w-full max-w-lg aspect-square">
            {/* Decorative layout simulating TV / screens */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-wine/20 to-brand-gold/20 rounded-3xl blur-2xl" />
            <div className="absolute inset-4 bg-black/40 border border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-md">
              <div className="h-10 bg-black/60 flex items-center px-4 gap-2 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 p-6 grid grid-cols-2 gap-4">
                <div className="col-span-2 h-32 rounded-xl bg-gradient-to-br from-brand-wine/10 to-transparent border border-white/5 flex items-center justify-center">
                   <Tv className="w-12 h-12 text-brand-wine/50" />
                </div>
                <div className="h-24 rounded-xl bg-gradient-to-br from-brand-gold/10 to-transparent border border-white/5 flex items-center justify-center">
                   <MonitorPlay className="w-10 h-10 text-brand-gold/50" />
                </div>
                <div className="h-24 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center">
                   <Smartphone className="w-10 h-10 text-gray-500" />
                </div>
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -right-8 top-1/4 bg-black/80 backdrop-blur-xl border border-white/10 px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-brand-gold">4K</div>
              <div>
                <div className="text-sm font-bold text-white">Ultra HD</div>
                <div className="text-xs text-gray-400">Quality Streams</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
