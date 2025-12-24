import {
    Activity,
    Wallet,
    Lightning,
    Terminal,
    PiggyBank,
    Users,
    Gift,
    CreditCard,
    Ticket,
    Globe,
    ShieldCheck,
    DeviceMobile as Smartphone,
    Bank,
    SquaresFour as LayoutGrid
} from '../components/Icons';
import { UserSegment, BentoItem } from '../types';

export const BENTO_DATA: Record<UserSegment, BentoItem[]> = {
    [UserSegment.ENTERPRISE]: [
        {
            id: 'overview',
            title: 'ToPay Business Suite',
            description: 'Real-time visualization of your NCMC cards, payouts, and revenue streams.',
            pillIcon: Activity,
            pillText: 'Financial Overview',
            type: 'large',
            visualType: 'chart',
            visualData: [40, 70, 50, 90, 60, 80]
        },
        {
            id: 'infrastructure',
            title: 'B2B Services',
            description: 'Core banking & issuance suite.',
            pillIcon: Wallet,
            pillText: 'Infrastructure',
            type: 'small',
            visualType: 'grid',
            visualData: [
                { label: "NCMC", icon: CreditCard },
                { label: "Vouchers", icon: Ticket },
                { label: "Cards", icon: Wallet },
                { label: "Travel", icon: Globe }
            ]
        },
        {
            id: 'api',
            title: 'API First',
            description: 'Integrate with 5 lines of code.',
            pillIcon: Terminal,
            pillText: 'Developers',
            type: 'small',
            visualType: 'code',
            visualData: {
                method: 'POST',
                endpoint: '/v1/cards',
                body: { type: 'ncmc' }
            }
        },
        {
            id: 'operations',
            title: 'All Extra Services',
            description: 'Scale your back-office with integrated HR, Tax, and Compliance modules.',
            pillIcon: Users,
            pillText: 'Operations',
            type: 'wide',
            visualType: 'list',
            visualData: [
                { label: "HRM", icon: Users },
                { label: "Tax", icon: CreditCard },
                { label: "Legal", icon: ShieldCheck }
            ]
        }
    ],
    [UserSegment.CONSUMER]: [
        {
            id: 'wallet',
            title: 'Smart Wallet',
            description: 'Track every penny with beautiful visualizations and get instant notifications.',
            pillIcon: Activity,
            pillText: 'Overview',
            type: 'large',
            visualType: 'image',
            visualData: '/assets/Wallet.svg'
        },
        {
            id: 'transfers',
            title: 'Instant Transfers',
            description: 'Send money to friends instantly.',
            pillIcon: Lightning,
            pillText: 'Speed',
            type: 'small',
            visualType: 'icon',
            visualData: Lightning
        },
        {
            id: 'savings',
            title: 'Saving Jars',
            description: 'Round up spare change automatically.',
            pillIcon: PiggyBank,
            pillText: 'Savings',
            type: 'small',
            visualType: 'icon',
            visualData: Bank
        },
        {
            id: 'rewards',
            title: 'Rewards & Cashback',
            description: 'Earn up to 5% cashback on your favorite brands.',
            pillIcon: Gift,
            pillText: 'Perks',
            type: 'wide',
            visualType: 'list',
            visualData: [
                { label: "Recharge", icon: Lightning },
                { label: "Travel", icon: Globe },
                { label: "FASTag", icon: Smartphone }
            ]
        }
    ]
};

export const BENTO_THEME = (isEnterprise: boolean) => ({
    primary: isEnterprise ? 'bg-red-600' : 'bg-blue-600',
    textPrimary: isEnterprise ? 'text-red-600' : 'text-blue-600',
    borderPrimary: isEnterprise ? 'border-red-600' : 'border-blue-600',
    bgLight: isEnterprise ? 'bg-red-50' : 'bg-white',
    gradient: isEnterprise ? 'from-red-600 to-rose-400' : 'from-blue-600 to-cyan-400',
    spotlight: isEnterprise ? 'rgba(220, 38, 38, 0.15)' : 'rgba(37, 99, 235, 0.15)',
    borderColor: isEnterprise ? 'rgba(220, 38, 38, 0.3)' : 'rgba(37, 99, 235, 0.3)',
});
