import { UserSegment } from '../types';

export interface FAQItem {
    question: string;
    answer: string;
}

export const FAQ_DATA: Record<UserSegment, FAQItem[]> = {
    [UserSegment.ENTERPRISE]: [
        {
            question: "How secure is ToPay for large-scale transactions?",
            answer: "ToPay is PCI-DSS Level 1 certified and uses enterprise-grade encryption. We process millions of transactions daily with a 99.9% success rate and full compliance with RBI and international regulations."
        },
        {
            question: "Can we integrate ToPay with our existing ERP?",
            answer: "Yes, ToPay provides a robust API-first infrastructure that integrates seamlessly with major ERPs like SAP, Oracle, and Microsoft Dynamics. Our developer-friendly documentation makes integration possible in just a few lines of code."
        },
        {
            question: "What kind of support do enterprise clients receive?",
            answer: "Enterprise clients get a dedicated account manager, 24/7 priority technical support, and customized onboarding sessions to ensure smooth operations."
        },
        {
            question: "How does ToPay handle cross-border compliance?",
            answer: "We have built-in compliance modules that automatically handle tax calculations, reporting, and regulatory requirements across different jurisdictions, reducing your back-office overhead."
        }
    ],
    [UserSegment.CONSUMER]: [
        {
            question: "Is my money safe in the ToPay wallet?",
            answer: "Absolutely. Your funds are held in regulated escrow accounts, and every transaction is protected by multi-factor authentication and real-time fraud monitoring."
        },
        {
            question: "How do I earn cashback with ToPay?",
            answer: "You earn instant cashback on every transaction made through our partner brands. The rewards are credited directly to your ToPay wallet and can be used for future spends or withdrawn to your bank."
        },
        {
            question: "Can I use ToPay for international travel?",
            answer: "Yes, ToPay's NCMC-enabled cards and digital wallet work across various transit systems and merchants globally, providing you with the best exchange rates."
        },
        {
            question: "Are there any hidden charges for transfers?",
            answer: "No, ToPay believes in complete transparency. All peer-to-peer transfers are free, and any service fees for other transactions are clearly displayed before you confirm."
        }
    ]
};
