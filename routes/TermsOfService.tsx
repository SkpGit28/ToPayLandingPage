import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { UserSegment } from '../types';

const TermsOfService: React.FC = () => {
    // Using CONSUMER mode for Navbar as default for generic pages
    const mode = UserSegment.CONSUMER;

    return (
        <div className="relative min-h-screen w-full bg-white overflow-x-hidden font-sans selection:bg-gray-100">
            <Navbar mode={mode} />

            <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <div className="prose prose-lg max-w-none text-text-muted">
                    <h1 className="font-display font-bold text-4xl text-text-main mb-8">Terms and Conditions</h1>

                    <h2 className="font-display font-bold text-2xl text-text-main mb-4 mt-8">Use of the MobilePe Platform/MobilePe Services</h2>
                    <p className="mb-6">
                        Please read the following terms and conditions carefully before registering on, accessing, browsing, downloading or using the MobilePe website located at www.mobilepe.co.in , and all associated sites linked to www.mobilepe.co.in , or the MobilePe mobile application or any similar platform (hereinafter collectively, the MobilePe Platform run by MobilePe E-Commerce Private Limited, having its registered office at D-1/7, G-01, Ground Floor, Palam Kunj, Palam extention, Sector- 7, Dwarka, Delhi, South West Delhi, Delhi – 110075, India
                    </p>

                    <h2 className="font-display font-bold text-2xl text-text-main mb-4 mt-12">Acceptance</h2>
                    <p className="mb-4">
                        By registering on, accessing, browsing, downloading or using the MobilePe Platform for any general purpose or for the specific purpose of availing any MobilePe Service, You agree to be bound by the single-sign-on ID (hereinafter SSOID) terms and conditions set forth below as well as by the service-specific terms and conditions applicable to each MobilePe Service (hereinafter collectively, the T&Cs). These T&Cs shall also include any additional or modified terms and conditions in relation to the SSOID or any additional or modified service-specific terms and conditions in relation to any MobilePe Service or any future service that may be offered by MobilePe on the MobilePe Platform.
                    </p>
                    <p className="mb-4">
                        By registering on, accessing, browsing, downloading or using (as applicable) the MobilePe Platform or availing any MobilePe Service or the SSOID, You automatically and immediately agree to all the T&Cs. If at any time You do not accept or agree with any of the T&Cs or do not wish to be bound by the T&Cs, You may not access, browse or use the MobilePe Platform and immediately terminate your availing the MobilePe Services.
                    </p>
                    <p className="mb-8">
                        The MobilePe Services shall be used by You subject to Your adherence with the T&Cs. As long as You accept and comply with these T&Cs, MobilePe grants You a personal, non-exclusive, non-transferable, limited, revocable privilege to enter and use the MobilePe Platform and/or avail the MobilePe Services.
                    </p>

                    <h2 className="font-display font-bold text-2xl text-text-main mb-4 mt-12">Service Specific Conditions to use</h2>
                    <p className="mb-4">
                        The Application and the Services are not available to persons under the age of 18 or to anyone previously suspended or removed from the Services by MEPL. By accepting these Terms and/or by using the Application/Services, You represent that You are at least of the age of 18 years.
                    </p>
                    <p className="mb-4">
                        For using this Application, You have to provide scanned copies of few KYC documents like (a) Pan Card, (b) Voter ID Card/Driving License/ Passport/ Aadhaar Card and (c) cancelled cheque. Upon the termination of the relationship between MEPL and the You, MEPL will keep your Personal Information for lawful purposes only.
                    </p>
                    <p className="mb-4">
                        You acknowledge that the terms of agreement with Your respective telecom or internet service provider will continue to apply when using the Services. As a result, You may be charged by the respective telecom or internet service provider for access to network connection services for the duration of the connection while accessing the Application and the Services or any such third party charges as may arise. You accept responsibility for any such charges that arise, and shall not claim the same from MEPL or dispute the same.
                    </p>
                    <p className="mb-4">
                        If You are not the bill payer for the mobile telephone or handheld device being used to access the Services, You will be assumed to have received permission from the bill payer for using the Services.
                    </p>
                    <p className="mb-4">
                        You are solely responsible for Your use of the Services. MEPL does not create, monitor, examine or inspect the content delivered to You through the Services, if any. Such content may include links to third-party websites and content. The linked content is not under K MEPL’s control and MEPL is not responsible whatsoever for the content of any such linked content. The content does not represent or reflect any advice, views, opinions or beliefs of MEPL.
                    </p>
                    <p className="mb-4">
                        Any User qualified for any club and the same appears in MobilePe App or web, has to complete 50% card activation ( out of his number of team at that level) to receive further commissions from Club income. If not done then commission will be on hold till he qualifies.
                    </p>
                    <p className="mb-4">
                        Furthermore, the hold commission will appear as hold for one year and there after it will automatically get nullified.
                    </p>
                    <p className="mb-4">
                        You must only use the Services and anything available via the Services for lawful purposes (complying with all Applicable Laws), in a responsible manner, and not in a way that might damage MEPL’s name or reputation or that of any of MEPL’s affiliates or service providers. You agree and acknowledge that the use of the information delivered to You through the Services is Your sole responsibility and that MEPL shall not at any time be held responsible for any unlawful usage of the information secured through the Services, by You.
                    </p>
                    <p className="mb-4">
                        You may find advertising or other content delivered with the use of Services that link to the sites and mobile applications and services of MEPL’s partners, Suppliers, advertisers, sponsors, licensors and other third parties and service providers. MEPL does not control the content, advertisement or links that appear through the Services and are not responsible for the practices employed by those websites and mobile applications linked to or from the Services. In addition, these sites and mobile applications or services, including their content and links, may be constantly changing. These sites and mobile applications and services may have their own terms of use and customer service policies. Browsing and interaction on any other website, advertisements and mobile applications which have a link in the Services, is subject to that website’s, advertisements and mobile applications own terms and policies.
                    </p>
                    <p className="mb-4">
                        You may find campaigns, offers, online donations and charities organized by MEPL (on its own or along with MEPL’s partners, Suppliers, advertisers, sponsors, licensors and other third parties and service providers), from time to time which may be made available to You in the course of Your access and use of Services. If You choose to participate in such campaigns, offers, online donations and charities, You agree that Your participation shall be voluntary and at Your sole discretion. Further, You should read and understand fully the contents of such campaigns, offers, online donations and charities and should be in agreement with them before Your participation. These campaigns, offers, online donations and charities may have their own terms of use and customer service policies available on their respective websites and You agree to such terms of use and policies before You participate in any of them. MEPL shall not be liable for any costs, liabilities, expenses and damages to You or any third parties arising out of and in course of Your participation in such campaigns, offers, online donations and charities and Your availing the benefits therefrom.
                    </p>
                    <p className="mb-4">
                        You will not, nor allow third parties on Your behalf to (i) make and distribute copies of the Application (ii) attempt to copy, reproduce, alter, modify, reverse engineer, disassemble, decompile, transfer, exchange or translate the Application; or (iii) create derivative works of the Application of any kind whatsoever.
                    </p>
                    <p className="mb-4">
                        You are solely responsible for entering the correct information (name, phone number, email address, home address, Date of Birth, Gender etc.).
                    </p>
                    <p className="mb-4">
                        MEPL shall try its level best to provide the Referral Amount (as defined hereinafter) to You till the time it is generated.
                    </p>
                    <p className="mb-4">
                        MEPL is not responsible for faulty internet connection or electricity failure or any other problem on Your side while availing the Services.
                    </p>
                    <p className="mb-4">
                        MEPL shall be under no liability whatsoever in respect of any loss or damage arising directly or indirectly out of the decline of authorization by the debit card/credit card/virtual wallet/internet banking service provider for any transaction done by You through the Application or Supplier Application. Further, MEPL shall not be under any liability whatsoever in respect of any loss or damage arising directly or indirectly out of the decline of authorization for any transaction, on account of the End User/cardholder having exceeded the preset limit mutually agreed by payment gateway service provider with their acquiring bank from time to time.
                    </p>
                    <p className="mb-4">
                        MEPL shall not in any way be liable for any delay, disruption or defects in the online payment facility provided by any financial institution/bank/payment gateway service provider. You acknowledge that You assume all the risks involved in using the online payment facility provided by the financial institution/bank/payment gateway service providers and MEPL shall not be in any way liable for any damage, loss, expense, liability or detriment caused (directly or indirectly) by a defect in said online payment facility.
                    </p>
                    <p className="mb-4">
                        You agree not to register on the Application with multiple mobile numbers from single mobile device with single email id. Registering from multi-SIM devices from multiple numbers is strictly prohibited. The right to use the Application and the Services there under is limited to one individual with single mobile number and associated mobile device.
                    </p>
                    <p className="mb-4">
                        The Application and the Services there under cannot be used with Android/iOS emulators. All devices are verified at multiple levels during availing the deals and offers. If the Application and the Services there under are found to be used with emulators or some kind of other automated system, your Application account will be permanently blocked.
                    </p>
                    <p className="mb-4">
                        As of now MEPL is providing Services in the Territory only, therefore only individuals of 18 years or older, residing in India and NRI may enroll for the Services. MEPL reserves the right to prevent access to the Application and the Services there under and its website from mobile number or IP addresses outside of India. Corporations, Companies, Partnerships or other legal business entities are also eligible to use the Application and the Services there under.
                    </p>
                    <p className="mb-4">
                        You agree to promptly notify MEPL of any change in Your mobile number or email address or any other details in Your personal profile by updating Your personal information in the Profile section of the Application. Your non-use of the Application and the Services there under for 90 (Ninety) days or failure to notify MEPL of any change in Your mobile number or email address or any other details in Your personal profile may result in the termination of Your Application account and forfeiture of Your unredeemed amount in Your mobile wallet account.
                    </p>
                    <p className="mb-4">
                        MEPL will not be liable to pay any compensation if any error occurs due to any technical or manual fault at the end of the web server holder.
                    </p>
                    <p className="mb-4">
                        You are solely responsible for Your mobile handset or device and the internet services that connect Your said device to the Application.
                    </p>
                    <p className="mb-4">
                        The Application and the Services here under are currently made available to You for Your personal use and non-commercial use, except for the Merchants. MEPL reserves the right to amend or withdraw the Application and the Services, provided to You in accordance with these Terms, at any time and for any reason.
                    </p>
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

            <Footer />
        </div>
    );
};

export default TermsOfService;
