import React from 'react';

interface AnswerOptionProps {
    text: string;
    selected: boolean;
    onClick: () => void;
    disabled?: boolean;
}

const AnswerOption: React.FC<AnswerOptionProps> = ({ text, selected, onClick, disabled }) => {
    return (
        <button
            className={`
        w-full h-[56px] bg-option-bg border border-option-border rounded-[10px] mb-[14px] 
        flex items-center justify-center relative cursor-pointer
        transition-all duration-200 ease-in-out
        ${!disabled && 'hover:bg-option-hover hover:brightness-[0.97]'}
        ${selected ?
                    'bg-[rgba(0,151,167,0.15)] !bg-opacity-100 !border-option-selected-border shadow-[0_0_0_1px_#006064]'
                    : ''}
      `}
            onClick={onClick}
            disabled={disabled}
        >
            <span className={`
        font-sans text-[16px] font-medium text-text-main transition-colors duration-150
        ${selected ? 'font-bold' : ''}
      `}>
                {text}
            </span>
        </button>
    );
};

export default AnswerOption;
