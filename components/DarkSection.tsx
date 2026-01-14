import React from 'react';
import { motion } from 'framer-motion';
import { Activity, BarChart, FileText } from 'lucide-react';
import { Button } from './ui/Button';

export const DarkSection: React.FC = () => {
  return (
    <section className="bg-gray-900 py-24 text-white overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sm font-medium text-white mb-6 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-green-400"></span>
              Tecnologia Avançada
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Diagnósticos Precisos <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-white">Tratamentos Eficazes</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-lg">
              Utilizamos equipamentos de última geração para mapear a saúde dos seus olhos com detalhes microscópicos.
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                "Tomografia de Coerência Óptica (OCT)",
                "Topografia de Córnea Computadorizada",
                "Microscopia Especular",
                "Laser de Femtossegundo"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-300">
                  <div className="w-5 h-5 rounded-full bg-brand-500 flex items-center justify-center text-white text-xs">✓</div>
                  {item}
                </li>
              ))}
            </ul>

            <Button variant="primary" size="lg" className="bg-accent-500 hover:bg-accent-600 border-none">
              Conheça nossos Equipamentos
            </Button>
          </div>

          {/* UI Visualization (Mocking the Dashboard in reference) */}
          <div className="order-1 lg:order-2 relative">
             <motion.div 
               initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
               whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="bg-gray-800 rounded-3xl p-8 border border-gray-700 shadow-2xl relative z-10"
             >
               <div className="flex justify-between items-center mb-8">
                 <div>
                   <h4 className="text-lg font-semibold text-white">Exame de Retina</h4>
                   <p className="text-xs text-gray-400">Paciente: João Silva</p>
                 </div>
                 <Activity className="text-brand-400" />
               </div>

               {/* Mock Graph */}
               <div className="bg-gray-900/50 rounded-xl p-6 mb-6">
                 <div className="flex items-baseline gap-2 mb-4">
                   <span className="text-3xl font-bold text-white">20/20</span>
                   <span className="text-green-400 text-sm font-bold flex items-center">
                     +15% Melhora <span className="ml-1">⚡</span>
                   </span>
                 </div>
                 <div className="h-24 flex items-end gap-2">
                   {[40, 60, 45, 70, 85, 90, 60, 75, 50, 65, 80, 95].map((h, i) => (
                     <div key={i} className="flex-1 bg-gray-700 rounded-t-sm hover:bg-brand-500 transition-colors duration-300" style={{ height: `${h}%` }}></div>
                   ))}
                 </div>
               </div>

               {/* List items mimicking dashboard rows */}
               <div className="space-y-4">
                 {[
                   { label: "Pressão Intraocular", val: "Normal (15 mmHg)", color: "bg-green-500" },
                   { label: "Acuidade Visual", val: "Estável", color: "bg-blue-500" },
                   { label: "Fundo de Olho", val: "Sem alterações", color: "bg-purple-500" }
                 ].map((stat, idx) => (
                   <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${stat.color}`}></div>
                        <span className="text-sm text-gray-300">{stat.label}</span>
                      </div>
                      <span className="text-sm font-medium text-white">{stat.val}</span>
                   </div>
                 ))}
               </div>
               
               {/* Floating elements */}
               <div className="absolute -bottom-10 -left-10 bg-gray-800 p-4 rounded-2xl border border-gray-700 shadow-xl flex items-center gap-4 animate-bounce duration-[3000ms]">
                 <div className="bg-brand-500 p-2 rounded-lg"><FileText size={20} /></div>
                 <div>
                   <div className="text-xs text-gray-400">Laudos em</div>
                   <div className="text-sm font-bold">24 Horas</div>
                 </div>
               </div>

             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};