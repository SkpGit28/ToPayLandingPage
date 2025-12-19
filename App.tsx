import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Lazy load pages for better performance
const Home = React.lazy(() => import('./routes/Home'));
const Company = React.lazy(() => import('./routes/Company'));
const ContactUs = React.lazy(() => import('./routes/ContactUs'));
const PrivacyPolicy = React.lazy(() => import('./routes/PrivacyPolicy'));
const TermsOfService = React.lazy(() => import('./routes/TermsOfService'));
const CookiePolicy = React.lazy(() => import('./routes/CookiePolicy'));
const NotFound = React.lazy(() => import('./routes/NotFound'));

import { UserSegment } from './types';
import ScrollToTop from './components/ScrollToTop';
import PageSkeleton from './components/ui/PageSkeleton';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Suspense fallback={<PageSkeleton />}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/company" element={<Company />} />
                    <Route path="/contact" element={<ContactUs mode={UserSegment.ENTERPRISE} />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/terms-of-service" element={<TermsOfService />} />
                    <Route path="/cookie-policy" element={<CookiePolicy />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
        </Router>
    );
}

export default App;
