import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { UserSegment } from '../types';

interface MainLayoutProps {
    children: React.ReactNode;
    mode?: UserSegment;
}

const MainLayout: React.FC<MainLayoutProps> = ({
    children,
    mode = UserSegment.CONSUMER
}) => {
    return (
        <div className="relative min-h-screen w-full bg-white overflow-x-hidden font-sans selection:bg-gray-100">
            <Navbar mode={mode} />

            {/* 
        The Navbar is fixed, so we might need padding here or in the page.
        Most pages had 'pt-32' or similar. We can standardize or let pages handle it.
        Looking at existing pages, they handle their own padding.
        However, to be a true layout, we should probably provide the container.
        But for now, to avoid breaking designs, we'll just render children.
        Wait, `ContactUs` has `pt-20`. `TermsOfService` has `pt-32`.
        Let's keep it flexible for now and just wrap.
      */}
            {children}
            <Footer />
        </div>
    );
};

export default MainLayout;
