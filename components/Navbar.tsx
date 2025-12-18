import React, { useState, useEffect } from 'react';
import CTAButton from './CTAButton';
import { UserSegment } from '../types';
import { CaretDown, List, X } from './Icons';
import MegaMenu from './MegaMenu';
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Full Screen Blur Overlay for Desktop Mega Menu */}
      <div
        className={`fixed inset-0 z-40 bg-black/5 backdrop-blur-sm transition-opacity duration-300 pointer-events-none md:block hidden
          ${isMenuOpen ? 'opacity-100' : 'opacity-0'}
        `}
      />

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-white transition-transform duration-300 md:hidden flex flex-col
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="flex items-center justify-between px-4 py-5 border-b border-gray-100">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2">
            <img
              src="/assets/ToPayLogo.png"
              alt="ToPay Logo"
              className="w-16 h-16 object-contain"
            />
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-4">
          <div className="flex flex-col space-y-6">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-lg font-medium ${isActive('/') ? 'text-brand-primary font-bold' : 'text-text-main'}`}
            >
              Home
            </Link>

            <div className="space-y-3">
              <div className="text-lg font-medium text-text-main">Our Solution</div>
              <div className="pl-4 flex flex-col space-y-3 border-l-2 border-gray-100">
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-text-muted hover:text-brand-primary">ToPay Business Suite</Link>
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-text-muted hover:text-brand-primary">B2B API's</Link>
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-text-muted hover:text-brand-primary">ToPay Superapp</Link>
              </div>
            </div>

            <Link
              to="/company"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-lg font-medium ${isActive('/company') ? 'text-brand-primary font-bold' : 'text-text-main'}`}
            >
              Company
            </Link>

            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-lg font-medium ${isActive('/contact') ? 'text-brand-primary font-bold' : 'text-text-main'}`}
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="p-4 border-t border-gray-100">
          <CTAButton mode={mode} size="large" className="w-full justify-center" />
          <div className="mt-4 text-center">
            <a href="#" className="text-sm font-semibold text-text-main hover:opacity-70">Already have an account? Login</a>
          </div>
        </div>
      </div>

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
            <a href="#" className="hidden sm:block text-sm font-semibold text-text-main hover:opacity-70">Login</a>
            <CTAButton mode={mode} size="small" className="flex" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;