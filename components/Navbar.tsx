import React, { useState, useEffect } from 'react';
import { Menu, X, Eye } from 'lucide-react';
import { Button } from './ui/Button';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Especialidades', href: '#servicos' },
    { name: 'Corpo Clínico', href: '#medicos' },
    { name: 'Convênios', href: '#convenios' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-brand-500 p-2 rounded-lg text-white">
              <Eye size={24} />
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">
              Clinica<span className="text-brand-500">Regional</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-gray-600 hover:text-brand-600 font-medium transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="dark" size="sm" onClick={() => window.location.href='#agendar'}>
              Agendar Consulta
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="block text-gray-600 hover:text-brand-500 font-medium text-lg"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <Button fullWidth variant="primary" onClick={() => { setIsOpen(false); window.location.href='#agendar'; }}>
                Agendar Agora
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};