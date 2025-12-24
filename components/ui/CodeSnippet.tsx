import React from 'react';
import { motion } from 'framer-motion';

interface CodeSnippetProps {
    method: string;
    endpoint: string;
    body: any;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ method, endpoint, body }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className="mt-auto w-full bg-[#1e293b] rounded-xl p-3 shadow-sm border border-gray-800 flex flex-col gap-2 font-mono text-[10px] leading-tight text-gray-300"
        >
            <div className="flex gap-1.5 pb-2 border-b border-gray-700/50 mb-1">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500/80"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/80"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-green-500/80"></div>
            </div>
            <div className="opacity-90">
                <span className="text-purple-400">{method}</span> {endpoint} <br />
                <span className="text-blue-400">{`{`}</span> <br />
                {Object.entries(body).map(([key, value]) => (
                    <React.Fragment key={key}>
                        &nbsp;&nbsp;{key}: <span className="text-green-400">"{String(value)}"</span> <br />
                    </React.Fragment>
                ))}
                <span className="text-blue-400">{`}`}</span>
            </div>
        </motion.div>
    );
};

export default React.memo(CodeSnippet);
