import { UserSegment, HeroContentData } from '../types';

export const HERO_CONTENT: Record<UserSegment, HeroContentData> = {
    [UserSegment.ENTERPRISE]: {
        heading: "One Platform for Everything Payments.",
        body: "Streamline your global transactions with enterprise-grade security, automated compliance, and real-time reconciliation across all borders.",
        buttonColor: "bg-brand-primary hover:bg-brand-primary/90",
        badges: ["No credit card required", "14-day free trial"]
    },
    [UserSegment.CONSUMER]: {
        heading: "One App, Total Control. Pay Bills",
        body: "Manage your personal finances, split bills with friends instantly, and track your daily spending habits effortlessly from your pocket.",
        buttonColor: "bg-brand-secondary hover:bg-brand-secondary/90",
        badges: { label: "Rated 4.4 ★ on Google Play", rating: "4.4" }
    }
};
