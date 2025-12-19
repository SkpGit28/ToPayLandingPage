import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import MainLayout from '../layouts/MainLayout';
import { UserSegment } from '../types';
import { ArrowRight, WarningCircle } from '../components/Icons';

const NotFound = () => {
    return (
        <MainLayout mode={UserSegment.ENTERPRISE}>
            <div className="pt-20 min-h-screen flex items-center justify-center bg-[#fafafa] px-4">
                <div className="max-w-2xl w-full text-center">

                    {/* Animated 404 Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative mb-8"
                    >
                        <h1 className="text-[12rem] md:text-[16rem] font-black leading-none text-gray-100 select-none font-display">
                            404
                        </h1>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100 rotate-12">
                                <WarningCircle className="w-16 h-16 text-red-500" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Message */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-display tracking-tight">
                            Page not found
                        </h2>
                        <p className="text-xl text-slate-500 mb-10 max-w-lg mx-auto leading-relaxed">
                            The page you are looking for doesn't exist or has been moved. Let's get you back on track.
                        </p>

                        {/* CTA Button */}
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-full font-bold hover:bg-red-700 transition-all shadow-lg hover:shadow-red-500/30 group"
                        >
                            Back to Home
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>

                </div>
            </div>
        </MainLayout>
    );
};

export default NotFound;
