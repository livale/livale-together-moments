
import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 64; // Height of fixed navbar
      const elementPosition = element.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  const navItems = [
    { label: 'Beranda', href: 'hero' },
    { label: 'Fitur', href: 'features' },
    { label: 'Kenangan', href: 'memories' },
    { label: 'Kontak', href: 'waitlist-section' }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-2xl font-bold text-gradient hover:opacity-80 transition-opacity"
              >
                Livale
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className="text-warmGray-700 hover:text-blush-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Button
                onClick={() => scrollToSection('waitlist-section')}
                className="bg-blush-500 hover:bg-blush-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200"
              >
                Daftar Tunggu
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-warmGray-700 hover:text-blush-600 p-2 rounded-md transition-colors duration-200"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-warmGray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-warmGray-700 hover:text-blush-600 hover:bg-blush-50 rounded-md transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2">
                <Button
                  onClick={() => scrollToSection('waitlist-section')}
                  className="w-full bg-blush-500 hover:bg-blush-600 text-white py-2 rounded-lg font-medium"
                >
                  Daftar Tunggu
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;
