import React from 'react';
import { Eye, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Button } from './ui/Button';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-brand-500 p-1.5 rounded-lg text-white">
                <Eye size={20} />
              </div>
              <span className="text-lg font-bold text-gray-900">
                Clinica<span className="text-brand-500">Regional</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm mb-6">
              Transformando vidas através de um cuidado excepcional com a visão. Tecnologia e humanização lado a lado.
            </p>
            <div className="flex space-x-4">
              {[Instagram, Facebook, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="text-gray-400 hover:text-brand-500 transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Links Rápidos</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-brand-500">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-brand-500">Corpo Clínico</a></li>
              <li><a href="#" className="hover:text-brand-500">Tratamentos</a></li>
              <li><a href="#" className="hover:text-brand-500">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Serviços</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-brand-500">Cirurgia de Catarata</a></li>
              <li><a href="#" className="hover:text-brand-500">Correção a Laser</a></li>
              <li><a href="#" className="hover:text-brand-500">Lentes de Contato</a></li>
              <li><a href="#" className="hover:text-brand-500">Exames de Rotina</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Contato</h4>
            <ul className="space-y-3 text-sm text-gray-500 mb-6">
              <li>Av. Principal, 1000 - Centro</li>
              <li>(11) 99999-9999</li>
              <li>contato@clinicaregional.com</li>
            </ul>
            <Button size="sm" fullWidth>Agendar Consulta</Button>
          </div>

        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">© 2024 Clinica de Olhos Regional. Todos os direitos reservados.</p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-gray-600">Privacidade</a>
            <a href="#" className="hover:text-gray-600">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};