import React, { useRef, useState } from 'react';

interface SpotlightCardProps {
    children: React.ReactNode;
    className?: string;
    spotlightColor?: string;
    borderColor?: string;
    isEnterprise?: boolean;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
    children,
    className = "",
    spotlightColor,
    borderColor,
    isEnterprise = true
}) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => { setOpacity(0.4); setIsHovered(true); }}
            onMouseLeave={() => { setOpacity(0); setIsHovered(false); }}
            className={`relative overflow-hidden rounded-[32px] border ${isHovered ? (isEnterprise ? 'border-red-500/30' : 'border-blue-500/30') : 'border-gray-200'} bg-[#fafafa] shadow-sm transition-all duration-300 ${className}`}
        >
            {/* Spotlight Gradient */}
            <div
                className="pointer-events-none absolute -inset-px transition duration-300 opacity-0"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
                }}
            />

            {/* Border Highlight */}
            <div
                className="pointer-events-none absolute inset-0 z-10 transition duration-300 opacity-0"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${borderColor}, transparent 40%)`,
                    maskImage: 'linear-gradient(black, black) content-box, linear-gradient(black, black)',
                    maskComposite: 'exclude',
                    WebkitMaskComposite: 'xor',
                    padding: '1px',
                }}
            />

            <div className="relative z-20 h-full">{children}</div>
        </div>
    );
};

export default SpotlightCard;
