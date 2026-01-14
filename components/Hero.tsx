import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, CheckCircle, Play } from 'lucide-react';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Content */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-6"
          >
            <span className="px-4 py-1.5 rounded-full bg-brand-50 text-brand-600 text-sm font-semibold border border-brand-100 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
              Novas tecnologias em cirurgia a laser
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight tracking-tight mb-6"
          >
            Sua Visão com a <br/>
            <span className="text-brand-600">Clareza que Merece.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-500 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Conectamos você aos melhores oftalmologistas da região. Tecnologia de ponta e atendimento humanizado para cuidar da saúde dos seus olhos.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="primary" size="lg" onClick={() => window.location.href='#agendar'}>
              Agende sua Consulta <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-full shadow-sm border border-gray-100">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://picsum.photos/32/32?random=${i}`} 
                    alt="Paciente" 
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <div className="flex flex-col items-start">
                <div className="flex text-yellow-400 text-xs">
                  <Star fill="currentColor" size={12} />
                  <Star fill="currentColor" size={12} />
                  <Star fill="currentColor" size={12} />
                  <Star fill="currentColor" size={12} />
                  <Star fill="currentColor" size={12} />
                </div>
                <span className="text-xs font-bold text-gray-700">2.000+ Pacientes</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bento Grid Layout (Mimicking Reference) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Card 1: Specialist Match (Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-4 bg-white rounded-[2rem] p-8 shadow-soft border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-all duration-300"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-500 to-accent-500"></div>
            <div className="flex items-center gap-2 mb-4 text-brand-600 font-semibold">
              <CheckCircle size={18} className="fill-brand-100" />
              <span>Corpo Clínico Premium</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Encontre o especialista ideal para você</h3>
            
            <div className="flex justify-between items-center mb-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-brand-500 to-transparent">
                    <img src={`https://picsum.photos/48/48?random=${i+10}`} className="w-full h-full rounded-full object-cover border-2 border-white" alt="Doctor" />
                  </div>
                  <span className="text-[10px] font-medium text-gray-500">Dr. Silva</span>
                </div>
              ))}
            </div>

            <Button variant="secondary" fullWidth size="sm" className="bg-brand-50 text-brand-700 border-none">
              Ver Todos os Médicos
            </Button>
          </motion.div>

          {/* Card 2: Stats (Center) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-3 flex flex-col gap-6"
          >
            <div className="flex-1 bg-white rounded-[2rem] p-6 shadow-soft border border-gray-100 flex flex-col justify-center items-center text-center hover:scale-105 transition-transform duration-300">
              <h4 className="text-4xl font-bold text-gray-900 mb-1">98%</h4>
              <p className="text-sm text-gray-500 font-medium">Satisfação dos Pacientes</p>
              <div className="mt-3 h-1.5 w-16 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 w-[98%] rounded-full"></div>
              </div>
            </div>
            
            <div className="flex-1 bg-white rounded-[2rem] p-6 shadow-soft border border-gray-100 flex flex-col justify-center items-center text-center hover:scale-105 transition-transform duration-300">
              <h4 className="text-4xl font-bold text-gray-900 mb-1">20+</h4>
              <p className="text-sm text-gray-500 font-medium">Anos de Experiência</p>
              <p className="text-xs text-gray-400 mt-2">Cuidando de gerações</p>
            </div>
          </motion.div>

          {/* Card 3: Visual/Video (Right) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-5 bg-gray-900 rounded-[2rem] relative overflow-hidden group min-h-[300px]"
          >
            <img 
              src="https://picsum.photos/800/600?grayscale&blur=2" 
              alt="Cirurgia moderna" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white cursor-pointer hover:bg-white/30 transition-colors">
                 <Play size={20} fill="currentColor" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Tecnologia Humanizada</h3>
              <p className="text-gray-300 text-sm">Conheça nossa estrutura moderna e equipamentos de última geração.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};