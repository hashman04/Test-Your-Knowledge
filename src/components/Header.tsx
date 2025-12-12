import React from 'react';

const Header: React.FC = () => {
    return (
        <div className="flex flex-col items-center text-center mb-6">
            <h1 className="font-serif text-[42px] font-semibold text-text-main mb-2">
                Test Your Knowledge
            </h1>
            <p className="font-sans text-[15px] text-text-sub m-0">
                Answer all questions to see your results
            </p>
        </div>
    );
};

export default Header;
