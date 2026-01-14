import React from 'react';
import { Button } from './ui/Button';

export const AppointmentCTA: React.FC = () => {
  return (
    <section id="agendar" className="py-20 max-w-5xl mx-auto px-4">
      <div className="bg-brand-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
        {/* Abstract Circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 relative z-10">
          Pronto para ver o mundo <br/> com outros olhos?
        </h2>
        <p className="text-brand-100 text-lg mb-10 max-w-2xl mx-auto relative z-10">
          Não adie o cuidado com sua saúde visual. Nossa equipe está pronta para te atender com a excelência que você merece.
        </p>
        
        <div className="relative z-10 flex flex-col sm:flex-row justify-center gap-4">
          <Button variant="primary" size="lg" className="bg-accent-500 hover:bg-accent-600 shadow-xl shadow-accent-500/20 border-none">
            Agende agora sua Consulta
          </Button>
          <Button variant="secondary" size="lg" className="bg-transparent border border-white/20 text-white hover:bg-white/10 hover:border-white">
            Falar no WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};