import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { UserSegment } from '../types';

const Company: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full bg-white overflow-x-hidden font-sans">
      <Navbar mode={UserSegment.ENTERPRISE} />
      
      <main className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">About Company</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn more about ToPay and our mission to revolutionize payments.
          </p>
        </div>

        {/* Company Content */}
        <div className="grid md:grid-cols-2 gap-12 mt-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              At ToPay, we're on a mission to simplify global payments and make 
              financial transactions seamless for businesses and consumers alike.
            </p>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              We envision a world where payments are instant, secure, and accessible 
              to everyone, regardless of borders or barriers.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Company;