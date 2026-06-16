export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-wine to-brand-gold flex items-center justify-center shadow-lg shadow-brand-wine/20">
            <span className="font-bold text-xl tracking-tighter text-white">LX</span>
          </div>
          <span className="font-display font-bold text-2xl tracking-tight text-white uppercase">
            IPTV
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#features" className="hover:text-white transition-colors duration-200">Features</a>
          <a href="#pricing" className="hover:text-white transition-colors duration-200 text-white border-b border-brand-gold pb-1">Pricing</a>
          <a href="#contact" className="hover:text-white transition-colors duration-200">Contact</a>
        </nav>
        <div className="flex items-center gap-4">
          <a 
            href="#pricing"
            className="px-6 py-2.5 rounded-xl text-sm font-bold bg-white/10 border border-white/5 text-white hover:bg-brand-gold hover:text-black hover:border-brand-gold transition-all font-sans"
          >
            Get Access
          </a>
        </div>
      </div>
    </header>
  );
}
