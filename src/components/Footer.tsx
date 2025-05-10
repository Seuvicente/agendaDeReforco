import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-indigo-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">ReforçoPlus</h3>
            <p className="text-indigo-200 mb-4">
              Ensino personalizado para ajudar alunos a superarem seus desafios acadêmicos com confiança e criatividade.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-indigo-200">
              <li><a href="/" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="/schedule" className="hover:text-white transition-colors">Agenda</a></li>
              <li><a href="/subjects" className="hover:text-white transition-colors">Matérias</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-indigo-200">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>(11) 98765-4321</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>contato@reforcoplus.com.br</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Rua das Flores, 123 - São Paulo</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-indigo-800 mt-8 pt-6 text-center text-indigo-300">
          <p>&copy; {new Date().getFullYear()} ReforçoPlus. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;