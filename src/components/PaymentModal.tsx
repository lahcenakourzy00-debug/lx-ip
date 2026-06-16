import { X, Lock, CreditCard } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
  price: string;
}

export default function PaymentModal({ isOpen, onClose, planName, price }: PaymentModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        >
          <motion.div 
            initial={{ scale: 0.95, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 20, opacity: 0 }}
            className="w-full max-w-lg bg-[#0a0a0a] border border-white/10 rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-2xl"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/20 blur-[80px] pointer-events-none" />

            <button 
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="mb-8 pr-8 relative z-10">
              <h2 className="text-2xl font-bold tracking-tight mb-2">Secure Checkout</h2>
              <p className="text-gray-400 text-sm">Complete your subscription for the {planName} Plan.</p>
            </div>

            <div className="bg-black/50 border border-white/10 rounded-2xl p-4 mb-6 flex justify-between items-center relative z-10">
               <span className="text-gray-300 font-bold">{planName} Access</span>
               <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-brand-wine">${price}</span>
            </div>

            {/* 
              * GO HIGH LEVEL (GHL) PAYMENT FORM SETUP *
              To use your GHL checkout form, replace the entire <form> 
              below with your GHL form embed snippet.
            */}
            <form className="space-y-4 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Contact Information</label>
                <input type="email" required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all font-sans text-sm" placeholder="Email Address" />
              </div>

              <div className="space-y-2 pt-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                  <CreditCard className="w-3 h-3" /> Payment Details
                </label>
                <div className="relative">
                  <input type="text" required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all font-sans text-sm" placeholder="Card Number" />
                </div>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <input type="text" required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all font-sans text-sm" placeholder="MM/YY" />
                  <input type="text" required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all font-sans text-sm" placeholder="CVC" />
                </div>
              </div>

              <button type="submit" className="w-full py-4 mt-6 rounded-xl bg-gradient-to-r from-brand-wine to-brand-gold hover:from-brand-gold hover:to-brand-wine text-white font-bold text-sm shadow-lg shadow-brand-gold/30 transition-all flex items-center justify-center gap-2">
                <Lock className="w-4 h-4" /> Pay ${price} Standard
              </button>

              <div className="pt-4 border-t border-white/10 mt-6 text-center">
                <p className="text-xs text-gray-500">
                  Prefer direct payment? <br/>
                  <a href={`https://paypal.me/lahcenakourzy00/${price}`} target="_blank" rel="noreferrer" className="text-brand-gold hover:text-brand-wine font-bold inline-flex items-center mt-1">
                    Pay securely via PayPal
                  </a>
                </p>
              </div>
            </form>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
