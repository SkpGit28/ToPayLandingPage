import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X } from './Icons';
import CTAButton from './CTAButton';
import { UserSegment } from '../types';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    mode: UserSegment;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, mode }) => {
    const location = useLocation();
    const isActive = (path: string) => location.pathname === path;

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <div
            className={`fixed inset-0 z-[60] bg-white transition-transform duration-300 md:hidden flex flex-col
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}
        >
            <div className="flex items-center justify-between px-4 py-5 border-b border-gray-100">
                <Link to="/" onClick={onClose} className="flex items-center gap-2">
                    <img
                        src="/assets/ToPayLogo.png"
                        alt="ToPay Logo"
                        className="w-16 h-16 object-contain"
                    />
                </Link>
                <button
                    onClick={onClose}
                    className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors"
                >
                    <X className="w-6 h-6" />
                </button>
            </div>

            <div className="flex-1 overflow-y-auto py-6 px-4">
                <div className="flex flex-col space-y-6">
                    <Link
                        to="/"
                        onClick={onClose}
                        className={`text-lg font-medium ${isActive('/') ? (mode === UserSegment.ENTERPRISE ? 'text-brand-primary font-bold' : 'text-brand-secondary font-bold') : 'text-text-main'}`}
                    >
                        Home
                    </Link>

                    <div className="space-y-3">
                        <div className="text-lg font-medium text-text-main">Our Solution</div>
                        <div className="pl-4 flex flex-col space-y-3 border-l-2 border-gray-100">
                            <Link to="/contact" onClick={onClose} className={`text-text-muted ${mode === UserSegment.ENTERPRISE ? 'hover:text-brand-primary' : 'hover:text-brand-secondary'}`}>ToPay Business Suite</Link>
                            <Link to="/contact" onClick={onClose} className={`text-text-muted ${mode === UserSegment.ENTERPRISE ? 'hover:text-brand-primary' : 'hover:text-brand-secondary'}`}>B2B API's</Link>
                            <Link to="/contact" onClick={onClose} className={`text-text-muted ${mode === UserSegment.ENTERPRISE ? 'hover:text-brand-primary' : 'hover:text-brand-secondary'}`}>ToPay Superapp</Link>
                        </div>
                    </div>

                    <Link
                        to="/company"
                        onClick={onClose}
                        className={`text-lg font-medium ${isActive('/company') ? (mode === UserSegment.ENTERPRISE ? 'text-brand-primary font-bold' : 'text-brand-secondary font-bold') : 'text-text-main'}`}
                    >
                        Company
                    </Link>

                    <Link
                        to="/contact"
                        onClick={onClose}
                        className={`text-lg font-medium ${isActive('/contact') ? (mode === UserSegment.ENTERPRISE ? 'text-brand-primary font-bold' : 'text-brand-secondary font-bold') : 'text-text-main'}`}
                    >
                        Contact Us
                    </Link>
                </div>
            </div>

            <div className="p-4 border-t border-gray-100">
                <CTAButton mode={mode} size="large" className="w-full justify-center" />
                <div className="mt-4 text-center">
                    <a href="https://customer.topay.live/" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-text-main hover:opacity-70">Already have an account? Login</a>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;
