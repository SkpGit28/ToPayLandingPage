import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import MainLayout from '../layouts/MainLayout';
import { UserSegment } from '../types';
import { ArrowRight, WarningCircle } from '../components/Icons';

const NotFound = () => {
    // Mouse position motion values
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring configuration
    const springConfig = { damping: 25, stiffness: 150 };
    const smoothX = useSpring(mouseX, springConfig);
    const smoothY = useSpring(mouseY, springConfig);

    // Transform values for parallax effect
    const rotateX = useTransform(smoothY, [-300, 300], [15, -15]);
    const rotateY = useTransform(smoothX, [-300, 300], [-15, 15]);
    const translateX = useTransform(smoothX, [-300, 300], [-20, 20]);
    const translateY = useTransform(smoothY, [-300, 300], [-20, 20]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Calculate mouse position relative to center of screen
            const { clientX, clientY } = e;
            const moveX = clientX - window.innerWidth / 2;
            const moveY = clientY - window.innerHeight / 2;
            mouseX.set(moveX);
            mouseY.set(moveY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <MainLayout mode={UserSegment.ENTERPRISE}>
            <div className="pt-20 min-h-screen flex items-center justify-center bg-[#fafafa] px-4 overflow-hidden">
                <div className="max-w-2xl w-full text-center">

                    {/* Animated 404 Text */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative mb-8 perspective-1000"
                    >
                        <h1 className="text-[12rem] md:text-[16rem] font-black leading-none text-gray-100 select-none font-display">
                            404
                        </h1>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                                style={{
                                    rotateX,
                                    rotateY,
                                    x: translateX,
                                    y: translateY,
                                    transformStyle: "preserve-3d"
                                }}
                                className="bg-white p-6 rounded-3xl shadow-2xl border border-gray-100/50 backdrop-blur-sm relative z-10"
                            >
                                <motion.div
                                    style={{ translateZ: 50 }}
                                    className="relative"
                                >
                                    <WarningCircle className="w-16 h-16 text-red-500 filter drop-shadow-lg" />
                                </motion.div>

                                {/* Subtle shadow that moves opposite to the icon */}
                                <motion.div
                                    style={{
                                        x: useTransform(translateX, (v) => -v * 0.5),
                                        y: useTransform(translateY, (v) => -v * 0.5),
                                        opacity: 0.1
                                    }}
                                    className="absolute inset-0 bg-black/20 rounded-3xl blur-xl -z-10"
                                />
                            </motion.div>
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
