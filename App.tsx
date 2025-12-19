import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Company from './routes/Company';
import ContactUs from './routes/ContactUs';
import PrivacyPolicy from './routes/PrivacyPolicy';
import TermsOfService from './routes/TermsOfService';
import CookiePolicy from './routes/CookiePolicy';

import { UserSegment } from './types';
import ScrollToTop from './components/ScrollToTop';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/company" element={<Company />} />
                <Route path="/contact" element={<ContactUs mode={UserSegment.ENTERPRISE} />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/cookie-policy" element={<CookiePolicy />} />
            </Routes>
        </Router>
    );
}

export default App;
