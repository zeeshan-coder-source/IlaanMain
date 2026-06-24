import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import logoImage from '../assets/logo.png';

const Header = ({ onMenuOpen, animationClass = '', logoClickable = true }) => {
  const { navigateTo } = useNavigation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? '' : ''}`}>
      <nav className={`flex items-center justify-between px-8 pb-4 md:px-12 lg:px-16 md:pb-6 lg:pb-2 ${scrolled ? 'pt-4 md:pt-4 lg:pt-2' : 'pt-10 md:pt-10 lg:pt-12'}`}>
        <div
          onClick={logoClickable ? () => navigateTo('home') : undefined}
          className={`flex items-center gap-2 ${logoClickable ? 'cursor-pointer hover:opacity-85 transition-opacity' : ''}`}
        >
          <img
            src={logoImage}
            alt="Ilaan Logo"
            className={`h-10 md:h-16 w-auto object-contain ${animationClass}`}
          />
        </div>

        <button
          onClick={onMenuOpen}
          className={`p-2 transition-transform active:scale-90 hover:scale-105 cursor-pointer ${animationClass}`}
        >
          <Menu size={32} className="text-white" strokeWidth={3} />
        </button>
      </nav>
    </header>
  );
};

export default Header;
