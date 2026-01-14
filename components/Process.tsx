import React from 'react';
import { Calendar, UserCheck, Eye, Smile } from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    { icon: Calendar, title: "Agendamento", desc: "Marque sua consulta online ou pelo telefone em minutos." },
    { icon: UserCheck, title: "Avaliação", desc: "Consulta detalhada com oftalmologista especializado." },
    { icon: Eye, title: "Exames", desc: "Realização de exames precisos na própria clínica." },
    { icon: Smile, title: "Tratamento", desc: "Solução personalizada para recuperar sua qualidade de vida." },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block px-3 py-1 rounded-full bg-orange-100 text-accent-600 text-xs font-bold mb-4 uppercase tracking-wider">
          Passo a Passo
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Recupere sua visão de forma <br/>
          <span className="text-accent-500">Simples e Eficiente</span>
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-16">
          Simplificamos todo o processo médico para que você foque apenas no que importa: enxergar o mundo melhor.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-soft hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <step.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
              {/* Connector Line (Desktop Only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 -right-4 w-8 h-0.5 bg-gray-200 z-10"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};