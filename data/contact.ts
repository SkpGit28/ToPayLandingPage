import { Headphones, NotePencil, Code } from '../components/Icons';

export const PORTALS = [
    {
        id: 'sales',
        icon: NotePencil,
        title: "Growth & Sales",
        desc: "For enterprises looking to scale their global infrastructure.",
        status: "Available",
        wait: "15 min",
        color: "blue"
    },
    {
        id: 'support',
        icon: Headphones,
        title: "Technical Support",
        desc: "Instant troubleshooting for your transactions and cards.",
        status: "High Volume",
        wait: "4 min",
        color: "green"
    },
    {
        id: 'dev',
        icon: Code,
        title: "Developer Desk",
        desc: "Deep-dive API support and integration architecture.",
        status: "Online",
        wait: "2 min",
        color: "purple"
    }
];

export const OFFICES = [
    {
        type: "Registered Office",
        city: "New Delhi",
        address: "Plot no.31, Ground Floor, Sai Enclave, Lane No: 2, Sector - 23, Dwarka, New Delhi - 110077",
        timezone: "GMT+5:30",
        coord: "28.57° N",
        img: "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=2070&auto=format&fit=crop"
    },
    {
        type: "Chennai Office",
        city: "Chennai",
        address: "3/162 First Floor Shanamuga Valli Complex, Nehru Street Echankadu Kovilambakkam, Chennai - 600129",
        timezone: "GMT+5:30",
        coord: "12.94° N",
        img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=2070&auto=format&fit=crop"
    }
];
