import { Mail, MessageCircle, Play } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative z-10 px-6 py-8 bg-white/[0.02] border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center text-[11px] md:text-sm gap-6">
        <div className="flex flex-col gap-1 text-center lg:text-left">
          <p className="text-gray-400">Payment via <span className="text-white font-bold">PayPal</span> | Guaranteed Activation within 30 mins</p>
          <p className="text-gray-500">Contact: <span className="text-brand-gold">lahcenakourzy00@gmail.com</span></p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="sm:mr-4">
            <p className="text-white font-semibold mb-1">Important Note:</p>
            <p className="text-gray-400 text-xs">Send a screenshot of your payment <br className="hidden sm:block" />to WhatsApp after purchase.</p>
          </div>
          <a 
            href="https://wa.me/212679095359" 
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-500 px-6 py-3 rounded-full font-bold text-sm transition-all text-white shrink-0 shadow-lg shadow-green-500/20"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Us
          </a>
        </div>
      </div>
    </footer>
  );
}
