import React from 'react';
import { UserSegment } from '../types';
import MainLayout from '../layouts/MainLayout';
import { COOKIE_POLICY } from '../data/legal';

const CookiePolicy: React.FC = () => {
    // Using CONSUMER mode for Navbar as default for generic pages
    const mode = UserSegment.CONSUMER;

    return (
        <MainLayout mode={mode}>
            <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <div className="prose prose-lg max-w-none text-text-muted">
                    <h1 className="font-display font-bold text-4xl text-text-main mb-8">Cookie Policy</h1>

                    {COOKIE_POLICY.map((section, index) => {
                        if (section.type === 'list' && section.items) {
                            return (
                                <div key={index} className="space-y-6 mb-8">
                                    <h2 className="font-display font-bold text-2xl text-text-main mb-4 mt-12">{section.title}</h2>
                                    {section.items.map((item, i) => (
                                        <div key={i}>
                                            <h3 className="font-bold text-text-main mb-2">{item.subtitle}</h3>
                                            <p className="mb-2">{item.text}</p>
                                        </div>
                                    ))}
                                </div>
                            );
                        }

                        if (section.type === 'contact_box' && section.address) {
                            return (
                                <div key={index} className="mb-8">
                                    <h2 className="font-display font-bold text-2xl text-text-main mb-4 mt-12">{section.title}</h2>
                                    <p className="mb-4">
                                        {section.content} <a href="mailto:info@mobilepe.co.in" className="text-brand-primary hover:underline font-medium">info@mobilepe.co.in</a> or by post to:
                                    </p>
                                    <div className="bg-gray-50 p-6 rounded-2xl mt-6 border border-gray-100">
                                        <p className="mb-2 font-bold">{section.address.name}</p>
                                        <p className="text-sm">{section.address.details}</p>
                                    </div>
                                </div>
                            );
                        }

                        return (
                            <div key={index} className="mb-6">
                                {section.title !== "Introduction" && (
                                    <h2 className="font-display font-bold text-2xl text-text-main mb-4 mt-12">{section.title}</h2>
                                )}

                                {Array.isArray(section.content) ? (
                                    section.content.map((paragraph, pIndex) => (
                                        <p key={pIndex} className="mb-4">{paragraph}</p>
                                    ))
                                ) : (
                                    <p className="mb-4">{section.content}</p>
                                )}
                            </div>
                        );
                    })}
                </div>
            </main>
        </MainLayout>
    );
};

export default CookiePolicy;
