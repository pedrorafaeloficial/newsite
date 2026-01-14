import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Users, Clock } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Text Content */}
          <div className="lg:col-span-5 sticky top-32">
            <span className="text-accent-600 font-semibold tracking-wide text-sm mb-2 block">● Nosso Compromisso</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Por que confiar na <br />
              <span className="text-brand-600">Clinica Regional</span> para sua visão?
            </h2>
            <p className="text-lg text-gray-500 mb-8 leading-relaxed">
              Combinamos expertise médica com tecnologia diagnóstica avançada para oferecer tratamentos precisos e seguros. Sua visão é o nosso bem mais precioso.
            </p>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-brand-600">
                <ShieldCheck />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg">Segurança Total</h4>
                <p className="text-sm text-gray-500">Protocolos rigorosos de higiene e segurança.</p>
              </div>
            </div>
          </div>

          {/* Cards Stack */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Red/Orange Accent Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-accent-500 rounded-3xl p-8 text-white shadow-lg shadow-accent-500/20 flex items-center gap-6 transform hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                <Zap size={32} className="text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-1">99.8%</h3>
                <p className="font-medium text-white/90">Precisão em Cirurgias a Laser</p>
                <p className="text-sm text-white/70 mt-1">Baseado em mais de 5.000 procedimentos.</p>
              </div>
            </motion.div>

            {/* White Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-soft border border-gray-100 flex items-center gap-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-gray-900 p-4 rounded-2xl text-white">
                <Clock size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Resultados Rápidos</h3>
                <p className="text-gray-500">Exames e diagnósticos entregues com agilidade para iniciar seu tratamento.</p>
              </div>
            </motion.div>

            {/* White Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-soft border border-gray-100 flex items-center gap-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-brand-500 p-4 rounded-2xl text-white">
                <Users size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Especialistas Renomados</h3>
                <p className="text-gray-500">Equipe multidisciplinar pronta para atender casos simples e complexos.</p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};