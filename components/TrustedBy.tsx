import React from 'react';

export const TrustedBy: React.FC = () => {
  const partners = [
    "Unimed", "Bradesco Saúde", "SulAmérica", "Amil", "Porto Seguro"
  ];

  return (
    <section className="py-10 border-b border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-wider mb-8">
          Convênios e Parceiros de Confiança
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner, idx) => (
            <div key={idx} className="text-xl md:text-2xl font-bold text-gray-300 font-serif hover:text-brand-600 cursor-default transition-colors">
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};