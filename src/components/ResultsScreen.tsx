import React, { useEffect } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

interface ResultsScreenProps {
    score: number;
    total: number;
    onRetry: () => void;
}

const ResultsScreen: React.FC<ResultsScreenProps> = ({ score, total, onRetry }) => {
    const percentage = Math.round((score / total) * 100);

    // Framer Motion spring for animating value
    const springValue = useSpring(0, { stiffness: 50, damping: 20, duration: 1.5 });
    const displayValue = useTransform(springValue, (current) => Math.round(current));

    useEffect(() => {
        springValue.set(percentage);
    }, [percentage, springValue]);

    return (
        <div className="flex flex-col items-center justify-center py-10 animate-fade-in">
            <p className="font-sans text-sm text-text-sub mb-4 uppercase tracking-widest">
                Keep Learning!
            </p>
            <h2 className="font-serif text-[32px] text-text-main mb-6">
                Your Final score is
            </h2>

            {/* Motion Component for rolling score */}
            <motion.div className="font-serif text-[80px] font-bold text-text-main mb-10 leading-none">
                <motion.span>{displayValue}</motion.span>%
            </motion.div>

            <button
                className="
          px-10 py-[14px] bg-bg-start text-text-main border border-option-border rounded-pill
          font-semibold text-base transition-all duration-200 ease-in-out
          hover:bg-option-hover hover:border-accent hover:-translate-y-[2px]
        "
                onClick={onRetry}
            >
                Start Again
            </button>
        </div>
    );
};

export default ResultsScreen;
