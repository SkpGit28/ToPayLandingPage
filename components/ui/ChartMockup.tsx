import React from 'react';
import { motion } from 'framer-motion';

interface ChartMockupProps {
    data: number[];
    primaryColor: string;
}

const ChartMockup: React.FC<ChartMockupProps> = ({ data, primaryColor }) => {
    return (
        <div className="flex-grow w-full rounded-2xl bg-white border border-gray-100 relative overflow-hidden shadow-sm mt-4">
            <div className="absolute inset-0 p-4 flex flex-col gap-3">
                <div className="flex justify-between items-center border-b border-gray-50 pb-2">
                    <div className="w-24 h-2 bg-gray-100 rounded-full"></div>
                    <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-gray-100"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-100"></div>
                    </div>
                </div>
                <div className="flex items-end justify-between h-32 px-2 pb-2 gap-2">
                    {data.map((h, i) => (
                        <motion.div
                            key={i}
                            initial={{ height: "10%" }}
                            whileInView={{ height: `${h}%` }}
                            transition={{ duration: 0.8, delay: i * 0.1, type: "spring", stiffness: 100 }}
                            viewport={{ once: true }}
                            className={`flex-1 rounded-t-sm opacity-80 ${primaryColor}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default React.memo(ChartMockup);
