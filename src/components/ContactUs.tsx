import { Send } from 'lucide-react';

export default function ContactUs() {
  return (
    <section id="contact" className="py-24 relative z-10 overflow-hidden bg-black/20 border-t border-white/5">
      <div className="max-w-3xl mx-auto px-6 relative">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-brand-wine">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Have questions or need support? Fill out the form below.
          </p>
        </div>

        {/* 
          * GO HIGH LEVEL (GHL) FORM INTEGRATION *
          To use your GHL contact form, delete the <form> element below 
          and paste your GHL iframe embed code here.
        */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm relative">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Full Name</label>
                <input type="text" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all font-sans" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email Address</label>
                <input type="email" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all font-sans" placeholder="john@example.com" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">WhatsApp Number</label>
              <input type="tel" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all font-sans" placeholder="+1 (555) 000-0000" />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Message</label>
              <textarea rows={4} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all resize-none font-sans" placeholder="How can we help you?"></textarea>
            </div>

            <button type="submit" className="w-full py-4 mt-2 rounded-xl bg-gradient-to-r from-brand-wine to-brand-gold hover:from-brand-gold hover:to-brand-wine text-white font-bold text-sm shadow-lg shadow-brand-gold/40 transition-all flex items-center justify-center gap-2">
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
