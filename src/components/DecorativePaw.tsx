import React from 'react';
import pawImage from '../assets/cat-paw.png';

const DecorativePaw: React.FC = () => {
    return (
        <div className="hidden lg:flex flex-col items-center absolute -bottom-10 -left-20 z-10 pointer-events-none">
            <div className="
        bg-white px-4 py-2 rounded-xl font-sans text-sm font-semibold text-text-main
        shadow-md mb-2 relative border border-option-border whitespace-nowrap
      ">
                Best of Luck!
                <div className="
          absolute -bottom-[6px] left-1/2 -translate-x-1/2
          w-0 h-0 border-l-[6px] border-l-transparent
          border-r-[6px] border-r-transparent
          border-t-[6px] border-t-white
        "/>
            </div>
            <img src={pawImage} alt="Cat Paw" className="w-[140px] h-auto -rotate-[10deg]" />
        </div>
    );
};

export default DecorativePaw;
