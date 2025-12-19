import React from 'react';
import { Link } from 'react-router-dom';
import { LogoIcon, TwitterLogo, LinkedinLogo } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2">
              <Link to="/" className="flex items-center gap-2 cursor-pointer group relative z-50">
                            <img
                              src="/assets/ToPayLogo.png"
                              alt="ToPay Logo"
                              className="w-16 h-16 object-contain"
                            />
                          </Link>
            </div>
            <p className="text-text-muted text-sm mb-6">
              Reimagining financial infrastructure for the modern world. Secure, fast, and reliable.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-text-muted hover:text-brand-primary transition-colors"><TwitterLogo className="w-5 h-5" /></a>
              <a href="#" className="text-text-muted hover:text-brand-secondary transition-colors"><LinkedinLogo className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="col-span-1">
            <h4 className="font-bold text-text-main mb-4">Product</h4>
            <ul className="space-y-3 text-sm text-text-muted">
              <li><a href="#" className="hover:text-text-main">Features</a></li>
              <li><a href="#" className="hover:text-text-main">Pricing</a></li>
              <li><a href="#" className="hover:text-text-main">Enterprise</a></li>
              <li><a href="#" className="hover:text-text-main">Security</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-bold text-text-main mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-text-muted">
              <li><a href="#" className="hover:text-text-main">About Us</a></li>
              <li><a href="#" className="hover:text-text-main">Careers</a></li>
              <li><a href="#" className="hover:text-text-main">Blog</a></li>
              <li><a href="#" className="hover:text-text-main">Contact</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-bold text-text-main mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-text-muted">
              <li><Link to="/privacy-policy" className="hover:text-text-main">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-text-main">Terms of Service</Link></li>
              <li><Link to="/cookie-policy" className="hover:text-text-main">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-muted text-center md:text-left">
            © 2024 ToPay Technologies Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <span className="text-xs text-text-muted font-medium">System Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;