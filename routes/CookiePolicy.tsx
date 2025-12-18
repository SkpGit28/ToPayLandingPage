import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { UserSegment } from '../types';

const CookiePolicy: React.FC = () => {
    // Using CONSUMER mode for Navbar as default for generic pages
    const mode = UserSegment.CONSUMER;

    return (
        <div className="relative min-h-screen w-full bg-white overflow-x-hidden font-sans selection:bg-gray-100">
            <Navbar mode={mode} />

            <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <div className="prose prose-lg max-w-none text-text-muted">
                    <h1 className="font-display font-bold text-4xl text-text-main mb-8">Cookie Policy</h1>

                    <p className="mb-6">
                        This Cookie Policy explains how MobilePe E-Commerce Private Limited ("MobilePe", "we", "us", or "our") uses cookies and similar technologies to recognize you when you visit our website at www.mobilepe.co.in or use our mobile application (collectively, the "Platform"). It explains what these technologies are and why we use them, as well as your rights to control our use of them.
                    </p>

                    <h2 className="font-display font-bold text-2xl text-text-main mb-4 mt-12">What are cookies?</h2>
                    <p className="mb-4">
                        Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
                    </p>
                    <p className="mb-4">
                        Cookies set by the website owner (in this case, MobilePe) are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics). The parties that set these third-party cookies can recognize your computer both when it visits the website in question and also when it visits certain other websites.
                    </p>

                    <h2 className="font-display font-bold text-2xl text-text-main mb-4 mt-12">Why do we use cookies?</h2>
                    <p className="mb-4">
                        We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Platform to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties. Third parties serve cookies through our Platform for advertising, analytics, and other purposes.
                    </p>

                    <h2 className="font-display font-bold text-2xl text-text-main mb-4 mt-12">Types of Cookies We Use</h2>

                    <div className="space-y-6">
                        <div>
                            <h3 className="font-bold text-text-main mb-2">Essential Cookies</h3>
                            <p className="mb-2">
                                These cookies are strictly necessary to provide you with services available through our Platform and to use some of its features, such as access to secure areas.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-bold text-text-main mb-2">Performance and Analytics Cookies</h3>
                            <p className="mb-2">
                                These cookies collect information that is used either in aggregate form to help us understand how our Platform is being used or how effective our marketing campaigns are, or to help us customize our Platform for you.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-bold text-text-main mb-2">Functionality Cookies</h3>
                            <p className="mb-2">
                                These cookies are used to enhance the performance and functionality of our Platform but are non-essential to their use. However, without these cookies, certain functionality (like videos) may become unavailable.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-bold text-text-main mb-2">Advertising Cookies</h3>
                            <p className="mb-2">
                                These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed for advertisers, and in some cases selecting advertisements that are based on your interests.
                            </p>
                        </div>
                    </div>

                    <h2 className="font-display font-bold text-2xl text-text-main mb-4 mt-12">How can I control cookies?</h2>
                    <p className="mb-4">
                        You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. The Cookie Consent Manager allows you to select which categories of cookies you accept or reject. Essential cookies cannot be rejected as they are strictly necessary to provide you with services.
                    </p>
                    <p className="mb-4">
                        You can also set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted. As the means by which you can refuse cookies through your web browser controls vary from browser-to-browser, you should visit your browser's help menu for more information.
                    </p>

                    <h2 className="font-display font-bold text-2xl text-text-main mb-4 mt-12">Updates to this Policy</h2>
                    <p className="mb-4">
                        We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
                    </p>
                    <p className="mb-8">
                        The date at the top of this Cookie Policy indicates when it was last updated.
                    </p>

                    <h2 className="font-display font-bold text-2xl text-text-main mb-4 mt-12">Contact Us</h2>
                    <p className="mb-4">
                        If you have any questions about our use of cookies or other technologies, please email us at <a href="mailto:info@mobilepe.co.in" className="text-brand-primary hover:underline font-medium">info@mobilepe.co.in</a> or by post to:
                    </p>

                    <div className="bg-gray-50 p-6 rounded-2xl mt-6 border border-gray-100">
                        <p className="mb-2 font-bold">MobilePe E-Commerce Private Limited</p>
                        <p className="text-sm">D-1/7, G-01, Ground Floor, Palam Kunj, Palam extention, Sector- 7, Dwarka, New Delhi, Delhi – 110075, India</p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default CookiePolicy;
