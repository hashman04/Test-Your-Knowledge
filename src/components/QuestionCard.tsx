import React from 'react';

interface QuestionCardProps {
    question: string;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question }) => {
    return (
        <div className="bg-bg-start rounded-[16px] p-6 mt-8 mb-6 text-center">
            <h2 className="font-sans text-[20px] font-semibold text-text-main leading-snug">
                {question}
            </h2>
        </div>
    );
};

export default QuestionCard;
