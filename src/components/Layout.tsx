import React from 'react';
import DecorativePaw from './DecorativePaw';

interface LayoutProps {
    children: React.ReactNode;
    checkPaw?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, checkPaw }) => {
    return (
        <main className="w-full min-h-screen flex justify-center items-center p-5">
            <div className="
        relative bg-card-bg w-full max-w-card p-8 md:p-card rounded-[24px] md:rounded-card
        shadow-soft flex flex-col transition-all duration-300
      ">
                {children}
                {checkPaw && <DecorativePaw />}
            </div>
        </main>
    );
};

export default Layout;
