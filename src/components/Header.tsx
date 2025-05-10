import React, { useState } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';
import { Link } from '../components/ui/Link';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="w-8 h-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-900">ReforçoPlus</span>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
              Início
            </Link>
            <Link to="/schedule" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
              Agenda
            </Link>
            <Link to="/subjects" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
              Matérias
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
              Contato
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              type="button"
              className="text-gray-600 hover:text-gray-900"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 py-4">
              <Link to="/" className="text-gray-700 hover:text-indigo-600 font-medium px-2" onClick={() => setIsMenuOpen(false)}>
                Início
              </Link>
              <Link to="/schedule" className="text-gray-700 hover:text-indigo-600 font-medium px-2" onClick={() => setIsMenuOpen(false)}>
                Agenda
              </Link>
              <Link to="/subjects" className="text-gray-700 hover:text-indigo-600 font-medium px-2" onClick={() => setIsMenuOpen(false)}>
                Matérias
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-indigo-600 font-medium px-2" onClick={() => setIsMenuOpen(false)}>
                Contato
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;