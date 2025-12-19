import React from 'react';
import { UserSegment } from '../types';
import MainLayout from '../layouts/MainLayout';
import { TERMS_OF_SERVICE } from '../data/legal';

const TermsOfService: React.FC = () => {
    // Using CONSUMER mode for Navbar as default for generic pages
    const mode = UserSegment.CONSUMER;

    return (
        <MainLayout mode={mode}>
            <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <div className="prose prose-lg max-w-none text-text-muted">
                    <h1 className="font-display font-bold text-4xl text-text-main mb-8">Terms and Conditions</h1>

                    {TERMS_OF_SERVICE.map((section, index) => (
                        <div key={index} className="mb-8">
                            <h2 className="font-display font-bold text-2xl text-text-main mb-4 mt-8">{section.title}</h2>
                            {Array.isArray(section.content) ? (
                                section.content.map((paragraph, pIndex) => (
                                    <p key={pIndex} className="mb-4">{paragraph}</p>
                                ))
                            ) : (
                                <p className="mb-6">{section.content}</p>
                            )}
                        </div>
                    ))}
                    <p className="mb-4">
                        As soon as You login the Web Web Application, Hold Account, Unclear Account, Commission Account (as defined hereinafter) for You will get created in the Web Application.
                    </p>
                    <p className="mb-4">
                        Your Commission Account will be credited through Under Clearing Balance with such Referral Amount (as defined hereinafter) as per the every transaction completed by the user(s) referred by You i.e., (“Direct Referee”) and the user(s) referred by Referee (“Indirect Referee”) (upto the five levels) and as more specified in the link of the Web Application and comply with such other terms and conditions as specified in the Web Application. “Referral Amount” here shall mean such successfully completed transaction commission credited to Your commission account through the transactions completed by Direct Referee and Indirect Referee. TDS will be deducted on Referral Amount as per the Government rules.
                    </p>
                    <p className="mb-4">
                        Further Your Under Clearing Balance will be credited each and every time when Direct Referee and Indirect Referee made any successful transaction on the Web Application with respect to Services provided therein. The said Referral Amount will be credited from Under Clearing Balance to your Commission/ Hold Account within 90 days of the transaction made by the Direct Referee and Indirect Referee.
                    </p>
                    <p className="mb-4">
                        You have the right to transfer the said Referral Amount from the Commission Account to your bank account subject to a minimum balance of Rs.1000/- of the said Referral Amount should be there in the Commission Account. In case of transfer of said Referral Amount to the bank account from the Commission Account, You have to bear certain bank charges for such transfer that will be levied by bank.
                    </p>
                    <p className="mb-4">
                        You have to do minimum one (1) transaction and the minimum amount of rupees 1000/- every particular month to get eligible for right of transfer the said Referral Amount from the Hold Account to your Commission account.
                    </p>
                    <p className="mb-4">
                        A minimum of 10 referrals from Direct Referee is must for the eligibility to get the right of transfer the said Referral Amount from the Hold Account to commission account. In case of less referral, then the amount will be transferred proportionately to the number of the transactions. For example: In case there are only 7 referrals and the Referral Amount is of Rs. 700, than You will be eligible for only 70% of Rs.700/- for transfer into the bank account. The remaining 30% will be transferred once the remaining 3 referrals will be done.
                    </p>
                    <p className="mb-4">
                        You will be eligible for a Rupay MobilePe Card (“Card”), subject to the charges levied by MEPL. The balance in this Card will be the same as in the Wallet Account (White Levelled) . It can be used anywhere for online as well as offline transactions. The details terms of use will be provided with documents of the Card. AMC charges on Card will be applicable, that decided by the MEPL decision.
                    </p>
                    <p className="mb-4">
                        Subject to the condition that, once the card operation stopped or blocked, whatever the reason behind, by service provider in anyway or otherwise, the company shall not be liable to return the cost of Rupay Card.
                    </p>
                    <p className="mb-4">
                        Subject to the condition that during the purchasing, bill payment, online booking and so on through the MobiePe, in the case issue arising the user can direct contact to the third party and resolve his/her issue with the third party. MEPL shall not be liable for any sort of settlement or repayment for unsuccessful order.
                    </p>
                    <p className="mb-4">
                        You agree and acknowledge that the amount credited to Your Wallet Account can be utilised by You, through online as well as offline the option available in the Web Application or outside the Web Application by transaction through Rupay Card.
                    </p>
                    <p className="mb-4">
                        You further agree and acknowledge that any such confirmation by the Supplier named MobilePe Mall is at the sole discretion of the Supplier and MEPL shall not be liable and responsible in any manner whatsoever for any issues, claims, demand, dispute or objection raised by You in respect of such confirmation and the consequent credit/ non-credit of the said amount in Your mobile wallet account.
                    </p>
                    <p className="mb-4">
                        In case You re-set (i.e., reformat) Your mobile device and due to such resetting Your present Wallet Account, Commission Account and Unclear Account balance becomes zero, You have to contact the Grievance Officer (specified details in these Terms) and communicate in writing Your problem along with the International Mobile Station Equipment Identity number (“IMEI”, which is a number uniquely associated with Your mobile device) and after due verification, MEPL may re-credit Your Wallet Account balance as well as Under Clearing Balance with the correct balance, as on the date on which Your mobile device was re-set, subject to re-installation of Web Application by You.
                    </p>
                    <p className="mb-4">
                        MEPL reserves the right to limit entitlements under various deals and offers in the Web Application/ Supplier Web Application at any time.
                    </p>
                    <p className="mb-4">
                        Deals and offers in the Web Application and the Services there under are subject to change at any time without notice.
                    </p>
                    <p className="mb-4">
                        The amount credited in Your Commission Account will be subtracted from Your Commission Account once the transfer order from Commisson Account to bank is placed by You and captured by the MEPL system. Once the said amount is transferred, the said amount will not be reinstated to Your Commission Account.
                    </p>
                    <p className="mb-4">
                        You are not allowed to use or create fake ID or fake address or provide any fake profile information for availing various deals and offers in the Web Application and the Supplier Web Applications in order to conduct any fraudulent activity, misconduct, the company shall be take action against the culprit within the Indian Judicial System.
                    </p>
                    <p className="mb-8">
                        MEPL reserves the right to cancel or disable Your Web Application account, where there is no activity for a period of 6 consecutive months or finds any illegal activity.
                    </p>

                    <h2 className="font-display font-bold text-2xl text-text-main mb-4 mt-12">SSOID Service</h2>
                    <p className="mb-4">
                        MobilePe SSOID service offers You the convenience, after a one-time registration any MobilePe Platform, to sign on (log in) to all web pages and online platforms operated by MobilePe or its affiliates (hereinafter the Participating Platforms) with single log-in access / data, without going through a separate registration process every time.
                    </p>
                    <p className="mb-4">
                        After successfully registering for the SSOID Service, the user can log-in via each Participating Platform with his SSOID access credentials. Moreover, if already logged in to one of the Participating Platforms, the user can immediately use all other Participating Platforms without additional log-in procedures (subject to the respective Participating Platform requiring further declarations).
                    </p>
                    <p className="mb-4">
                        With regard to the contractual relationships of the users with the respective Participating Platforms, for the purposes of which MobilePe SSOID service is or can be used in accordance with these T&Cs, these can alternatively have their own commercial and user terms and conditions.
                    </p>
                    <p className="mb-4">
                        These business or user terms and conditions are available on the respective Participating Platforms. For the respective contents of the Participating Platforms, the respective affiliate of MobilePe is solely responsible only for those content that it actually operates.
                    </p>
                    <p className="mb-4">
                        For the SSOID service, these T&Cs apply exclusively, whereas for the use of the Participating Platforms, their business and user terms and conditions apply along with these T&Cs.
                    </p>
                    <p className="mb-4">
                        The SSOID shall be owned and operated by MEPL for use on all Participating Platforms. For the use of MobilePe SSOID service, the user must register. Registration as a user is only allowed if the user meets the eligibility criteria as set out in these T&Cs.
                    </p>
                    <p className="mb-4">
                        Each user can set up only one user account. The user is obliged to provide correct and complete information during the registration and use of the SSOID service. The login data is intended solely for personal use by the user and therefore always to be kept secret and safe.
                    </p>
                    <p className="mb-4">
                        The user is not entitled to share his login details with third parties to use the SSOID service or to disclose them otherwise. The user is obliged to inform MobilePe immediately on becoming aware of and/or suspecting a case of any unauthorized use, disclosure and/or misuse of their access data or of their user account. Furthermore, the user is obliged not to use the user account of another person.
                    </p>
                    <p className="mb-8">
                        Submission of the duly completed registration form by the user simply provides invitation to us to make an offer to enter into the agreement on the use of our SSOID service.
                    </p>

                    <h2 className="font-display font-bold text-2xl text-text-main mb-4 mt-12">Communication Policy</h2>
                    <p className="mb-4">By accepting the T&Cs, You accept the following:</p>
                    <ul className="list-disc pl-6 mb-8 space-y-2">
                        <li>
                            MobilePe may send alerts to the mobile phone number provided by You while registering with the MobilePe Platform for the SSOID service or on any updated mobile number subsequently provided by You on the MobilePe Platform, or via e-mail or push notifications. The alerts will be received in case of SMS, only if the mobile phone is in ‘On’ mode to receive the SMS, in case of e-mail, only if the e-mail servers and e-mail ids are functional, and in case of push notifications, if the user has enabled the receipt of such notifications. If the mobile phone is in ‘Off’ mode or if the e-mail servers or ids are not functional or if the push-notifications feature has been turned off, then You may not get the alert at all or get delayed messages.
                        </li>
                        <li>
                            The SMS/e-mail alert/push notification service provided by MobilePe is an additional facility provided for Your convenience and that it may be susceptible to error, omission and/or inaccuracy. In the event that You observe any error in the information provided in the alert, MobilePe shall be immediately informed about the same by You and MobilePe will make best possible efforts to rectify the error as early as possible. You shall not hold MobilePe liable for any loss, damages, claim, expense including legal cost that may be incurred/suffered by You on account of the SMS/e-mail alert/push notification facility.
                        </li>
                        <li>
                            The clarity, readability, accuracy and promptness of providing the SMS/e-mail alert/push notification service depend on many factors including the infrastructure and connectivity of the service provider. MobilePe shall not be responsible for any non-delivery, delayed delivery or distortion of the alert in any way whatsoever.
                        </li>
                        <li>
                            You will indemnify and hold harmless MobilePe and the SMS/e-mail service provider including its officials from any damages, claims, demands, proceedings, losses, costs, charges and expenses whatsoever including legal charges and attorney’s fees which MobilePe or the SMS/e-mail service provider may at any time incur, sustain, suffer or be subjected to as a consequence of, or arising out of, any of the following: (i) misuse by You or improper or fraudulent information provided by You; (ii) incorrect number or a number that belongs to an unrelated third party provided by You.
                        </li>
                    </ul>

                    <h2 className="font-display font-bold text-2xl text-text-main mb-4 mt-12">Use of MobilePe Web Platform</h2>
                    <p className="mb-8">
                        You understand that MobilePe cannot and does not guarantee or warrant that files available for download through the MobilePe Platform will be free of viruses, worms or other code that may be damaging. You are responsible for implementing procedures to satisfy Your particular requirements of Internet security and for accuracy of data input and output.
                    </p>

                    <h2 className="font-display font-bold text-2xl text-text-main mb-4 mt-12">Prohibited Conduct</h2>
                    <p className="mb-4">You shall not host, display, upload, modify, publish, transmit, update or share any information that:</p>
                    <ul className="list-disc pl-6 mb-8 space-y-2">
                        <li>belongs to another person and to which You do not have any right to;</li>
                        <li>is grossly harmful, harassing, blasphemous, defamatory, obscene, pornographic, paedophilic, libellous, invasive of another's privacy, hateful, or racially, ethnically objectionable, disparaging, relating or encouraging money laundering or gambling, or otherwise unlawful in any manner whatever; or unlawfully threatening or unlawfully harassing including but not limited to “indecent representation of women” within the meaning of the Indecent Representation of Women (Prohibition) Act, 1986;</li>
                        <li>harm minors in any way;</li>
                        <li>infringes any patent, trademark, copyright or other proprietary rights or third party’s trade secrets or rights of publicity or privacy or shall not be fraudulent or involve the sale of counterfeit or stolen items;</li>
                        <li>violates any law for the time being in force;</li>
                        <li>deceives or misleads the addressee/ users about the origin of such messages or communicates any information which is grossly offensive or menacing in nature;</li>
                        <li>impersonate another person;</li>
                        <li>threatens the unity, integrity, defence, security or sovereignty of India, friendly relations with foreign states, or public order or causes incitement to the commission of any cognisable offence or prevents investigation of any offence or is insulting any other nation.</li>
                        <li>shall not be false, inaccurate or misleading;</li>
                        <li>send automated request of any kind to the MobilePe Platform without express permission in advance from MobilePe.</li>
                        <li>The Brand MobilePe has been registered by MobilePe E-Commerce Pvt.Ltd. under the IPR Laws, that the word MobilePe is prohibited to used by any MobilePe user. They are not allowed to create any page or account/ social media handle in the name of MobilePe , as standalone or prefix or suffix for any, likewise Facebook/ You Tube/ Twitter/ LinkedIn and so on.</li>
                        <li>In case anyone finds breach in above mentioned condition or found guilty, the user ID and account will be blocked by company, till the name/ page/ account is deleted or changed</li>
                        <li>Transfer of business is prohibited until the prior written confirmation from both parties may be allowed in Exceptional Cases.</li>
                    </ul>

                    <h2 className="font-display font-bold text-2xl text-text-main mb-4 mt-12">Termination; Agreement Violations</h2>
                    <p className="mb-4">
                        You agree that MobilePe, in its sole discretion, for any or no reason, and without penalty, may suspend or terminate Your account (or any part thereof) or Your use of the MobilePe Services/MobilePe Platform and remove and discard on the MobilePe Platform all or any part of Your account, Your user profile, or Your recipient profile, including Your SSOID, at any time.
                    </p>
                    <p className="mb-4">
                        MobilePe may also in its sole discretion and at any time discontinue providing access to the MobilePe Services, or any part thereof, with or without notice. You agree that any termination of Your access to the MobilePe Services/MobilePe Platform or any account You may have or portion thereof may be effected without prior notice, and You agree that MobilePe will not be liable to You or any third party for any such termination or interruption.
                    </p>
                    <p className="mb-8">
                        Any suspected fraudulent, abusive or illegal activity may be referred to appropriate law enforcement authorities. These remedies are in addition to any other remedies MobilePe may have at law or in equity. Upon termination for any reason, You agree to immediately stop using the MobilePe Services/MobilePe Platform.
                    </p>

                    <h2 className="font-display font-bold text-2xl text-text-main mb-4 mt-12">Limitation of Liability and Damages</h2>
                    <p className="mb-4 uppercase">
                        MEPL, INCLUDING ITS OFFICERS, DIRECTORS, SHAREHOLDERS, EMPLOYEES, SUB-CONTRACTORS, AGENTS, PARENT COMPANIES, SISTER COMPANIES, SUBSIDIARIES AND OTHER AFFILIATES WILL NOT BE LIABLE, TO THE MAXIMUM EXTENT PERMITTED BY THE APPLICABLE LAW, FOR ANY DIRECT, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGE, OR ANY OTHER DAMAGE AND LOSS (INCLUDING LOSS OF PROFIT, LOSS OF DATA AND WORK STOPPAGE), COSTS, EXPENSES AND PAYMENTS, REGARDLESS OF THE ALLEGED LIABILITY OR FORM OF ACTION, WHETHER IN CONTRACT, TORT OR OTHERWISE, INCLUDING NEGLIGENCE, INTELLECTUAL PROPERTY INFRINGEMENT, PRODUCT LIABILITY AND STRICT LIABILITY, THAT MAY RESULT FROM, OR IN CONNECTION WITH THE USE OR THE INABILITY TO ACCESS AND USE THE APPLICATION OR THE SERVICES, OR FROM ANY FAILURE, ERROR, OR DOWNTIME IN THE FUNCTION OF THE SERVICES, OR FROM ANY FAULT OR ERROR MADE BY MEPL'S STAFF, OR FROM YOUR RELIANCE ON CONTENT DELIVERED THROUGH THE SERVICES, OR FROM ANY COMMUNICATION WITH MEPL OR FROM ANY DENIAL OR CANCELLATION OF REQUEST FOR INFORMATION THROUGH THE SERVICES, OR FROM RETENTION, DELETION, DISCLOSURE OR ANY OTHER USE OR LOSS OF CONTENT THROUGH THE SERVICES, REGARDLESS OF WHETHER MEPL HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. IN ANY EVENT, YOUR SOLE REMEDY WILL BE LIMITED TO THE CORRECTIONS OF SUCH ERRORS, AS DEEMED FIT BY MEPL IN ITS SOLE DISCRETION.
                    </p>
                    <p className="mb-8 uppercase">
                        WITHOUT PREJUDICE TO THE AFORESAID, IT IS HEREBY ACKNOWLEDGED BY THE END USER THAT THE AGGREGATE LIABILITY OF MEPL, FOR ANY REASONS WHATSOEVER, WILL NOT EXCEED RS. 100/- (RUPEES ONE HUNDRED ONLY) OR THE TOTAL COST PAID BY THE END USER IN THE PERIOD OF 12 (TWELVE) MONTHS PRIOR TO WHICH THE CLAIM AROSE, WHICHEVER IS LOWER.
                    </p>

                    <h2 className="font-display font-bold text-2xl text-text-main mb-4 mt-12">Indemnification</h2>
                    <p className="mb-8">
                        You agree to indemnify and hold MEPL, the licensors, business partners of MEPL or the service providers and their respective officers, directors, shareholders, employees, sub-contractors, agents, parent companies, sister companies, subsidiaries and other affiliates, indemnified and harmless from any claim or demand, including reasonable attorneys' fees, made by any third party due to or arising out of Your use of the Application or Services, any unauthorised use of the Application/Services by You, Your violation of these Terms, or Your violation of any rights including rights in any form of intellectual property of any third party and/or any violation of applicable law by You.
                    </p>

                    <h2 className="font-display font-bold text-2xl text-text-main mb-4 mt-12">Disclaimer; No Warranties</h2>
                    <p className="mb-4 uppercase">
                        EXCEPT AS EXPRESSLY SET FORTH IN THIS TERMS, MEPL EXPRESSLY DISCLAIMS ANY OTHER WARRANTY WITH RESPECT TO THE USE OF THE APPLICATION/WEB SITE/SERVICES OR ANY CONTENT OR INFORMATION DELIVERED OR SENT THROUGH THE SERVICES TO YOU. THE SERVICES ARE PROVIDED WITHOUT ANY EXPRESS OR IMPLIED GUARANTEE OR ASSURANCE OF QUALITY, RELIABILITY OF THE INFORMATION DELIVERED THROUGH THE SERVICES. MEPL DISCLAIMS ALL EXPRESS AND IMPLIED WARRANTIES WITH REGARD TO THE SERVICES. MEPL DOES NOT WARRANT OR GUARANTEE THAT THE USE OF THE SERVICES WILL NOT CAUSE ANY DAMAGES TO YOUR MOBILE PHONE OR TO ANY OTHER SERVICES PROVIDED TO YOUR MOBILE PHONE OR APPLICATIONS OR WEBSITE AND CONTENT THAT RESIDE ON YOUR MOBILE PHONE/PC/LAPTOP. YOU AGREE AND ACKNOWLEDGE THAT THE USE, AND ACCESS OF THE SERVICES IS ENTIRELY, OR AT THE MAXIMUM PERMITTED BY THE APPLICABLE LAW, AT YOUR OWN RISK.
                    </p>
                    <p className="mb-4 uppercase">
                        MEPL DOES NOT WARRANT OR GUARANTEE THAT THE APPLICATION AND SERVICES WILL OPERATE IN AN UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE MANNER, OR THAT THE SERVICES WILL ALWAYS BE AVAILABLE OR FREE FROM ERRORS OR THAT THE SERVICES WILL BE IMMUNE FROM UNAUTHORIZED ACCESS.
                    </p>
                    <p className="mb-4 uppercase">
                        MEPL DOES NOT WARRANT, GUARANTEE OR MAKE ANY REPRESENTATIONS THAT YOU WILL FIND THE SERVICES SUITABLE FOR YOUR NEEDS. MEPL DOES NOT WARRANT OR GUARANTEE THAT THE INFORMATION YOU RECEIVE TO YOUR MOBILE DEVICES/SYSTEM WILL BE FREE FROM TECHNICAL INACCURACIES.
                    </p>
                    <p className="mb-8 uppercase">
                        MEPL WILL BE ENTITLED TO USE, SUBJECT TO THE PRIVACY POLICY AS DEFINED ABOVE, ANY INFORMATION SUPPLIED BY YOU DURING THE COURSE OF ACCESSING AND USING THE SERVICES.
                    </p>

                    <h2 className="font-display font-bold text-2xl text-text-main mb-4 mt-12">Ownership; Proprietary Rights</h2>
                    <p className="mb-4">
                        The MobilePe Services and the MobilePe Platform are owned and operated by MobilePe E-Commerce Private Limited. The visual interfaces, graphics, design, compilation, information, computer code (including source code and object code), products, software, services, and all other elements of the MobilePe Services and the MobilePe Platform provided by MEPL are protected by Indian copyright, trade dress, patent, and trademark laws, international conventions, and all other relevant intellectual property and proprietary rights, and applicable laws.
                    </p>
                    <p className="mb-4">
                        As between You and MobilePe, all Materials, trademarks, service marks, and trade names contained on the MobilePe Platform are the property of MEPL. You agree not to remove, obscure, or alter MobilePe or any third party’s copyright, patent, trademark, or other proprietary rights notices affixed to or contained within or accessed in conjunction with or through the MobilePe Services/MobilePe Platform. Except as expressly authorized by MobilePe,
                    </p>
                    <p className="mb-4">
                        You agree not to sell, license, distribute, copy, modify, publicly perform or display, transmit, publish, edit, adapt, create derivative works from, or otherwise make unauthorized use of the Materials. MobilePe reserves all rights not expressly granted in this Agreement.
                    </p>
                    <p className="mb-8">
                        If You have comments regarding the MobilePe Services and/or the MobilePe Platform or ideas on how to improve it, please contact customer service. Please note that by doing so, You hereby irrevocably assign to MobilePe, and shall assign to MobilePe, all rights, title and interests in and to all ideas and suggestions and any and all worldwide intellectual property rights associated therewith. You agree to perform such acts and execute such documents as may be reasonably necessary to perfect the foregoing rights.
                    </p>

                    <h2 className="font-display font-bold text-2xl text-text-main mb-4 mt-12">Modification of this Agreement</h2>
                    <p className="mb-8">
                        MEPL reserves the right to modify or discontinue the Service with or without notice to You. MEPL shall not be liable to You or any third party should MEPL exercise its right to modify or discontinue the Service. You acknowledge and accepts that MEPL does not guarantee continuous, uninterrupted or secure access to Application and operation of our Application may be interfered with or adversely affected by numerous factors or circumstances outside the control of MEPL.
                    </p>

                    <h2 className="font-display font-bold text-2xl text-text-main mb-4 mt-12">Waiver</h2>
                    <p className="mb-8">
                        The failure of MobilePe to exercise or enforce any right or provision of this Agreement will not constitute a waiver of such right or provision. Any waiver of any provision of this Agreement will be effective only if in writing and signed by MEPL
                    </p>

                    <h2 className="font-display font-bold text-2xl text-text-main mb-4 mt-12">Governing Law and Forum for Disputes</h2>
                    <p className="mb-4">
                        These Terms shall be governed by the laws of India. You and MEPL agree to submit to the personal and exclusive jurisdiction of the courts of New Delhi. In case of any dispute or other matter arising in reference to the Terms and/or the Services, such dispute or other matter shall be referred to a sole arbitrator appointed by MEPL and shall be governed by the Arbitration and Conciliation Act, 1996, amended from time to time. The venue for arbitration shall be New Delhi, and shall be conducted in English language. All the costs, charges and expenses in connection to the arbitration shall be solely borne by the End User who raised the dispute.
                    </p>
                    <p className="mb-8">
                        Subject to the provisions of clause above, the courts having jurisdiction under the provisions of the Arbitration and Conciliation Act, 1996, to determine all the matters which the court is entitled to determine under the Act, including, without limitation, provision of interim reliefs under the provisions of section 9 of the Arbitration and Conciliation Act, 1996, shall exclusively be the courts at New Delhi, India.
                    </p>

                    <h2 className="font-display font-bold text-2xl text-text-main mb-4 mt-12">Survival</h2>
                    <p className="mb-8">
                        You agree and confirm that the indemnities, confidentiality obligations, limitation of liability, disclaimer of warranties, dispute resolution mechanism, shall survive the efflux of time.
                    </p>

                    <h2 className="font-display font-bold text-2xl text-text-main mb-4 mt-12">Headings</h2>
                    <p className="mb-8">
                        The heading references herein are for convenience purposes only and they do not constitute a part of these T&Cs and will not be deemed to limit or affect any of the provisions hereof.
                    </p>

                    <h2 className="font-display font-bold text-2xl text-text-main mb-4 mt-12">Entire Agreement</h2>
                    <p className="mb-8">
                        This Agreement is the entire agreement between You and MobilePe relating to the subject matter hereof and this Agreement will not be modified except by a change to this Agreement made by MobilePe in accordance with the terms of this Agreement.
                    </p>

                    <div className="bg-gray-50 p-6 rounded-2xl mt-12 border border-gray-100">
                        <h3 className="font-bold text-text-main mb-2">Contact Information</h3>
                        <p className="mb-2 font-bold">MobilePe E-Commerce Private Limited,</p>
                        <p className="mb-4 text-sm">Address:- D-1/7, G-01, Ground Floor, Palam Kunj, Palam extention, Sector- 7, Dwarka, New Delhi, Delhi – 110075, India</p>

                        <p className="mb-2 font-bold">Kind Attention: Mr. Shree Krishan Choudhary,</p>
                        <p className="text-sm">MobilePe E-Commerce Private Limited is a company, registered under the laws of India, having its registered office at D-1/7, G-01, Ground Floor, Palam Kunj, Palam extention, Sector- 7, Dwarka, Delhi, South West Delhi, Delhi – 110075, India.</p>
                    </div>
                </div>
            </main>
        </MainLayout>
    );
};

export default TermsOfService;
