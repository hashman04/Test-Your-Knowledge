import React from 'react';

interface ProgressBarProps {
    total: number;
    current: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ total, current }) => {
    return (
        <div className="flex gap-2 w-[60%] mx-auto justify-center">
            {Array.from({ length: total }).map((_, index) => (
                <div
                    key={index}
                    className={`
            h-1 flex-1 rounded-sm transition-colors duration-300 ease-in-out
            ${index <= current ? 'bg-accent' : 'bg-inactive'}
          `}
                />
            ))}
        </div>
    );
};

export default ProgressBar;
