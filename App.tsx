import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustedBy } from './components/TrustedBy';
import { Features } from './components/Features';
import { Process } from './components/Process';
import { DarkSection } from './components/DarkSection';
import { AppointmentCTA } from './components/AppointmentCTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#fafafa] font-sans selection:bg-brand-200 selection:text-brand-900">
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Features />
        <DarkSection />
        <Process />
        <AppointmentCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;