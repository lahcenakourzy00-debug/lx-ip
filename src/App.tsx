/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import bgImage from './assets/images/streaming_preview_grid_1781590726757.jpg';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#c8a37e]/30 selection:text-[#c8a37e] font-sans flex flex-col">
      {/* Background Image with Overlay */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20 pointer-events-none"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-[#050505]/40 via-[#050505]/80 to-[#050505] pointer-events-none" />

      {/* Background Glows */}
      <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-brand-wine/30 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-brand-gold/20 rounded-full blur-[100px] pointer-events-none z-0" />

      <Header />
      <main className="flex-1 relative z-10 flex flex-col">
        <Hero />
        <Features />
        <Pricing />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}
