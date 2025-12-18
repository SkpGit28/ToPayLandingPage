import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { UserSegment } from '../types';

const PrivacyPolicy: React.FC = () => {
    // Using CONSUMER mode for Navbar as default for generic pages
    const mode = UserSegment.CONSUMER;

    return (
        <div className="relative min-h-screen w-full bg-white overflow-x-hidden font-sans selection:bg-gray-100">
            <Navbar mode={mode} />

            <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <div className="prose prose-lg max-w-none text-text-muted">
                    <h1 className="font-display font-bold text-4xl text-text-main mb-8">Privacy Policy</h1>

                    <p className="mb-6">
                        MobilePe is an application (hereinafter referred to as an “app”) developed by MobilePe E-Commerce Private Limited, a company incorporated under the Companies Act, 2013 with its registered office at D-1/7, G-01, Ground Floor, Palam Kunj, Palam extention, Sector- 7, Dwarka, Delhi, South West Delhi, Delhi – 110075, India.
                    </p>

                    <p className="mb-6">
                        We value the trust you place in us. That's why we insist upon the highest standards for secure transactions and customer information privacy. Please read the following statement to learn about our information gathering and dissemination practices.
                    </p>

                    <div className="bg-gray-50 p-6 rounded-2xl mb-8 border border-gray-100">
                        <h3 className="font-bold text-text-main mb-2">Note:</h3>
                        <p className="text-sm">
                            Our privacy policy is subject to change at any time without notice. Though every effort would be made to keep you informed of the changes, if any, to the policy, you are kindly advised to review the policy periodically.
                        </p>
                    </div>

                    <p className="mb-6">
                        By downloading this app you agree to be bound by the terms and conditions of this Privacy Policy. As this policy enables us to provide you a secure and a wholesome experience, we will not be able to register you, if you are not in agreement with these terms.
                    </p>

                    <p className="mb-8">
                        By mere use of the app, you expressly consent to our use and disclosure of your personal information in accordance with this Privacy Policy. This Privacy Policy is incorporated into and subject to the Terms of Use.
                    </p>

                    <h2 className="font-display font-bold text-2xl text-text-main mb-4 mt-12">Collection of Personally Identifiable Information and other Information</h2>
                    <p className="mb-4">
                        When you use our app, we collect and store your personal information which is provided by you from time to time. Our primary goal in doing so is to provide you a safe, efficient, smooth and customized experience. This allows us to provide services and features that most likely meet your needs, and to customize our Website to make your experience safer and easier. More importantly, while doing so we collect personal information from you that we consider necessary for achieving this purpose.
                    </p>
                    <p className="mb-4">
                        It is mandatory to register yourself in order to use the app. And once you give us your personal information, you are not anonymous to us. Where possible, we indicate which fields are required and which fields are optional.. We may automatically track certain information about you based upon your behaviour on our app. We use this information to do internal research on our users' demographics, interests, and behaviour to better understand, protect and serve our users. This information is compiled and analysed on an aggregated basis.
                    </p>
                    <p className="mb-4">
                        We use data collection devices such as "cookies"/similar,etc on certain pages of the app to help analyse our app page flow, measure promotional effectiveness, and promote trust and safety. "Cookies" are small files placed on your device hard-drive/storage that assist us in providing our services. We offer certain features that are only available through the use of a "cookie".
                    </p>
                    <p className="mb-4">
                        We also use cookies to allow you to enter your password less frequently during a session. Cookies can also help us provide information that is targeted to your interests. Most cookies are "session cookies," meaning that they are automatically deleted from your device hard-drive/storage at the end of a session. You are always free to decline our cookies if your device permits, although in that case you may not be able to use certain features on the app and you may be required to re-enter your password more frequently during a session.
                    </p>
                    <p className="mb-4">
                        If you choose to transact on the app, we collect information about your transaction behaviour. We collect some additional information, such as a billing address, details of recipient or payer of the transaction, location, etc.
                    </p>
                    <p className="mb-4">
                        If you choose to post messages on our message boards, chat rooms or other message areas or leave feedback, we will collect that information you provide to us. We retain this information as necessary to resolve disputes, provide customer support and troubleshoot problems as permitted by law.
                    </p>
                    <p className="mb-4">
                        If you send us personal correspondence, such as emails or letters, or if other users or third parties send us correspondence about your activities on the app, we may collect such information into a file specific to you.
                    </p>
                    <p className="mb-8">
                        We collect personally identifiable information (email address, name, phone number, etc.) from you when you register with us. We do use your contact information to send you offers based on your transaction history and your interests.
                    </p>

                    <h2 className="font-display font-bold text-2xl text-text-main mb-4 mt-12">Use of Demographic / Profile Data / Your Information</h2>
                    <p className="mb-4">
                        We use personal information to provide the services you request. To the extent we use your personal information to market to you, we will provide you the ability to opt-out of such uses. We use your personal information to resolve disputes; troubleshoot problems; help promote a safe service; collect money; measure consumer interest in our products and services, inform you about online and offline offers, products, services, and updates; customize your experience; detect and protect us against error, fraud and other criminal activity; enforce our terms and conditions; and as otherwise described to you at the time of collection.
                    </p>
                    <p className="mb-4">
                        In our efforts to continually improve our product and service offerings, we collect and analyse demographic and profile data about our users' activity on our app.
                    </p>
                    <p className="mb-4">
                        We identify and use your IP address to help diagnose problems with our server, and to administer our app. Your IP address is also used to help identify you and to gather broad demographic information.
                    </p>
                    <p className="mb-8">
                        We will occasionally ask you to complete optional online surveys. These surveys may ask you for contact information and demographic information (like zip code, age, or income level). We use this data to tailor your experience at our app, providing you with content that we think you might be interested in and to display content according to your preferences.
                    </p>

                    <h2 className="font-display font-bold text-2xl text-text-main mb-4 mt-12">Sharing of personal information</h2>
                    <p className="mb-4">
                        We may share personal information with our other corporate entities and affiliates.
                    </p>
                    <p className="mb-4">
                        We may use personally identifiable information (email address, name, phone number, credit card / debit card / other payment instrument details, etc.) provided by you to our corporate entities and affiliates in the course of making transactions.
                    </p>
                    <p className="mb-4">
                        We may also disclose anonymised data derived from your personal information to third parties. This disclosure may be required for us to provide you access to our Services, to comply with our legal obligations, to enforce our User Agreement, to facilitate our marketing and advertising activities, or to prevent, detect, mitigate, and investigate fraudulent or illegal activities related to our Services. We do not disclose your personal information to third parties for their marketing and advertising purposes without your explicit consent.
                    </p>
                    <p className="mb-4">
                        We may disclose personal information if required to do so by law or in the good faith belief that such disclosure is reasonably necessary to respond to subpoenas, court orders, or other legal process. We may disclose personal information to law enforcement offices, third party rights owners, or others in the good faith belief that such disclosure is reasonably necessary to: enforce our Terms or Privacy Policy; respond to claims that an advertisement, posting or other content violates the rights of a third party; or protect the rights, property or personal safety of our users or the general public.
                    </p>
                    <p className="mb-8">
                        We and our affiliates will share / sell some or all of your personal information with another business entity should we (or our assets) plan to merge with, or be acquired by that business entity, or re-organization, amalgamation, restructuring of business. Should such a transaction occur that other business entity (or the new combined entity) will be required to follow this privacy policy with respect to your personal information.
                    </p>

                    <h2 className="font-display font-bold text-2xl text-text-main mb-4 mt-12">Links to Other Platforms</h2>
                    <p className="mb-8">
                        Our app links to other platform that may collect personally identifiable information about you. MobilePe is not responsible for the privacy practices or the content of those linked platforms.
                    </p>

                    <h2 className="font-display font-bold text-2xl text-text-main mb-4 mt-12">Security Precautions</h2>
                    <p className="mb-8">
                        Our app has stringent security measures in place to protect the loss, misuse, and alteration of the information under our control. Whenever you change or access your account information, we offer the use of a secure server. Once your information is in our possession we adhere to strict security guidelines, protecting it against unauthorized access.
                    </p>

                    <h2 className="font-display font-bold text-2xl text-text-main mb-4 mt-12">Choice/Opt-Out</h2>
                    <p className="mb-4">
                        We provide all users with the opportunity to opt-out of receiving non-essential (promotional, marketing-related) communications from us on behalf of our partners, and from us in general, after setting up an account.
                    </p>
                    <p className="mb-8">
                        If you want to remove your contact information from all MobilePe lists and newsletters, please click on the unsubscribe button on the emailers.
                    </p>

                    <h2 className="font-display font-bold text-2xl text-text-main mb-4 mt-12">Your Consent</h2>
                    <p className="mb-4">
                        By using the app and/ or by providing your information, you consent to the collection and use of the information you disclose on the app in accordance with this Privacy Policy, including but not limited to Your consent for sharing your information as per this privacy policy.
                    </p>
                    <p className="mb-8">
                        If we decide to change our privacy policy, we will post those changes on this page so that you are always aware of what information we collect, how we use it, and under what circumstances we disclose it.
                    </p>

                    <h2 className="font-display font-bold text-2xl text-text-main mb-4 mt-12">Further Questions?</h2>
                    <p className="mb-8">
                        Send us a message by using this e-mail <a href="mailto:info@mobilepe.co.in" className="text-brand-primary hover:underline font-medium">info@mobilepe.co.in</a>
                    </p>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
