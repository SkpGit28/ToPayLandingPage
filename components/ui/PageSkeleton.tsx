import React from 'react';

const PageSkeleton = () => {
    return (
        <div className="min-h-screen bg-white animate-pulse">
            {/* Navbar Skeleton */}
            <div className="fixed top-0 left-0 right-0 h-20 bg-white border-b border-gray-100 z-50 px-6 flex items-center justify-between">
                <div className="w-32 h-8 bg-gray-200 rounded-md"></div>
                <div className="hidden md:flex gap-8">
                    <div className="w-20 h-4 bg-gray-200 rounded-md"></div>
                    <div className="w-20 h-4 bg-gray-200 rounded-md"></div>
                    <div className="w-20 h-4 bg-gray-200 rounded-md"></div>
                </div>
                <div className="w-24 h-10 bg-gray-200 rounded-full"></div>
            </div>

            {/* Hero Section Skeleton */}
            <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
                <div className="flex flex-col items-center text-center space-y-8">
                    {/* Pill */}
                    <div className="w-48 h-8 bg-gray-200 rounded-full"></div>

                    {/* Title */}
                    <div className="space-y-4 w-full max-w-4xl">
                        <div className="h-16 md:h-24 bg-gray-200 rounded-3xl w-full"></div>
                        <div className="h-16 md:h-24 bg-gray-200 rounded-3xl w-3/4 mx-auto"></div>
                    </div>

                    {/* Subtitle */}
                    <div className="space-y-3 w-full max-w-2xl pt-4">
                        <div className="h-4 bg-gray-200 rounded-full w-full"></div>
                        <div className="h-4 bg-gray-200 rounded-full w-5/6 mx-auto"></div>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4 pt-8">
                        <div className="w-40 h-14 bg-gray-200 rounded-full"></div>
                        <div className="w-40 h-14 bg-gray-200 rounded-full"></div>
                    </div>
                </div>
            </div>

            {/* Content Grid Skeleton */}
            <div className="max-w-7xl mx-auto px-6 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="h-64 bg-gray-100 rounded-3xl"></div>
                    <div className="h-64 bg-gray-100 rounded-3xl"></div>
                    <div className="h-64 bg-gray-100 rounded-3xl"></div>
                </div>
            </div>
        </div>
    );
};

export default PageSkeleton;
