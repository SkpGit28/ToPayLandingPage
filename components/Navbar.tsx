import React, { useState, useEffect } from 'react';
import CTAButton from './CTAButton';
import { UserSegment } from '../types';
import { CaretDown, List } from './Icons';
import MegaMenu from './MegaMenu';
import MobileMenu from './MobileMenu';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  mode: UserSegment;
}

const Navbar: React.FC<NavbarProps> = ({ mode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Menu Overlay */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        mode={mode}
      />

      <nav className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-full">

          {/* Mobile Hamburger & Logo Container */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 -ml-2 text-gray-600 hover:bg-gray-100/50 rounded-lg transition-colors"
            >
              <List className="w-6 h-6" />
            </button>
            <Link to="/" className="flex items-center gap-2 cursor-pointer group relative z-50">
              <img
                src="/assets/ToPayLogo.png"
                alt="ToPay Logo"
                className="w-16 h-16 object-contain"
              />
            </Link>
          </div>

          {/* Desktop Logo */}
          <Link to="/" className="hidden md:flex items-center gap-2 cursor-pointer group relative z-50 w-[220px]">
            <img
              src="/assets/ToPayLogo.png"
              alt="ToPay Logo"
              className="w-16 h-16 md:w-20 md:h-20 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-12 items-center absolute left-1/2 -translate-x-1/2">
            <Link to="/" className={`text-sm font-medium transition-colors ${isActive('/') ? 'text-brand-primary font-bold' : 'text-text-main hover:text-brand-primary'}`}>Home</Link>
            {/* Mega Menu Trigger */}
            <div
              className="relative"
              onMouseEnter={() => setIsMenuOpen(true)}
              onMouseLeave={() => setIsMenuOpen(false)}
            >
              <button
                className={`flex items-center gap-1 text-sm font-medium transition-colors py-2 
                  ${isMenuOpen ? 'text-brand-primary' : 'text-text-main hover:text-brand-primary'}`}
              >
                Our Solution
                <CaretDown
                  className={`w-3 h-3 text-text-muted transition-transform duration-200 
                    ${isMenuOpen ? 'rotate-180 text-brand-primary' : ''}`}
                />
              </button>

              {/* Mega Menu Overlay - Center Aligned */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-200 origin-top
                  ${isMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible'}
                `}
              >
                <MegaMenu />
              </div>
            </div>

            <Link to="/company" className={`text-sm font-medium transition-colors ${isActive('/company') ? 'text-brand-primary font-bold' : 'text-text-main hover:text-brand-primary'}`}>Company</Link>
            <Link to="/contact" className={`text-sm font-medium transition-colors ${isActive('/contact') ? 'text-brand-primary font-bold' : 'text-text-main hover:text-brand-primary'}`}>Contact Us</Link>
          </div>

          {/* CTA Section */}
          <div className="flex items-center gap-6 relative z-50 w-[220px] justify-end ml-auto">
            <a href="https://customer.topay.live/" target="_blank" rel="noopener noreferrer" className="hidden sm:block text-sm font-semibold text-text-main hover:opacity-70">Login</a>
            <CTAButton mode={mode} size="small" className="flex" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;