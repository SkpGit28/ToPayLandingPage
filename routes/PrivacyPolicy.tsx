import React from 'react';
import { UserSegment } from '../types';
import MainLayout from '../layouts/MainLayout';
import { PRIVACY_POLICY } from '../data/legal';

const PrivacyPolicy: React.FC = () => {
    // Using CONSUMER mode for Navbar as default for generic pages
    const mode = UserSegment.CONSUMER;

    return (
        <MainLayout mode={mode}>
            <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <div className="prose prose-lg max-w-none text-text-muted">
                    <h1 className="font-display font-bold text-4xl text-text-main mb-8">Privacy Policy</h1>

                    {PRIVACY_POLICY.map((section, index) => {
                        if (section.type === 'note') {
                            return (
                                <div key={index} className="bg-gray-50 p-6 rounded-2xl mb-8 border border-gray-100">
                                    <h3 className="font-bold text-text-main mb-2">{section.title}:</h3>
                                    <p className="text-sm">{section.content as string}</p>
                                </div>
                            );
                        }

                        return (
                            <div key={index} className="mb-6">
                                {section.title !== "Introduction" && section.title !== "Agreement" && (
                                    <h2 className="font-display font-bold text-2xl text-text-main mb-4 mt-12">{section.title}</h2>
                                )}

                                {Array.isArray(section.content) ? (
                                    section.content.map((paragraph, pIndex) => (
                                        <p key={pIndex} className="mb-4">{paragraph}</p>
                                    ))
                                ) : (
                                    <p className="mb-4">
                                        {section.content}
                                        {section.isEmail && (
                                            <a href="mailto:info@mobilepe.co.in" className="text-brand-primary hover:underline font-medium ml-1">
                                                info@mobilepe.co.in
                                            </a>
                                        )}
                                    </p>
                                )}
                            </div>
                        );
                    })}
                </div>
            </main>
        </MainLayout>
    );
};

export default PrivacyPolicy;
