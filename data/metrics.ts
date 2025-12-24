import { MetricData, CertificationData } from '../types';

export const METRICS_DATA: MetricData[] = [
    {
        value: 1.2,
        suffix: " Cr+",
        label: "Transactions Processed"
    },
    {
        value: 80,
        suffix: " Lakhs",
        label: "Successful Settlements"
    },
    {
        value: 99.9,
        suffix: "%",
        label: "System Uptime"
    }
];

export const CERTIFICATIONS: CertificationData[] = [
    {
        id: 'rbi',
        name: 'RBI',
        role: 'Regulated Entity',
        logo: '/assets/RBI.svg'
    },
    {
        id: 'npci',
        name: 'NPCI',
        role: 'Strategic Partner',
        logo: '/assets/npci.svg'
    },
    {
        id: 'rupay',
        name: 'RuPay',
        role: 'Issuance Partner',
        logo: '/assets/rupay.svg'
    },
    {
        id: 'pci',
        name: 'PCI-DSS',
        role: 'Security L1',
        logo: '/assets/pci.svg'
    }
];
