import React from 'react';

interface NavigationControlsProps {
    onNext: () => void;
    onPrev: () => void;
    isFirst: boolean;
    isLast: boolean;
    canProceed: boolean;
    onSubmit: () => void;
}

const NavigationControls: React.FC<NavigationControlsProps> = ({
    onNext,
    onPrev,
    isFirst,
    isLast,
    canProceed,
    onSubmit
}) => {
    return (
        <div className="flex justify-between items-center mt-8 w-full">
            {!isFirst ? (
                <button
                    className="
            w-12 h-12 rounded-xl bg-option-bg text-text-main border border-option-border text-2xl
            flex items-center justify-center transition-all duration-200 ease-in-out
            hover:bg-option-hover hover:border-accent
            disabled:opacity-50 disabled:cursor-not-allowed
          "
                    onClick={onPrev}
                    aria-label="Previous Question"
                >
                    ←
                </button>
            ) : (
                /* Spacer to maintain layout if needed, though flex w/ conditional is fine. 
                   But purely to keep "Next" on right if strictly following space-between logic 
                   where left side is empty. */
                <div />
            )}

            {/* Spacer handled by justify-between, but if we want specific centering logic we could add one here.
          In the CSS version we had a flex:1 spacer. justify-between does the job usually. */}

            {isLast ? (
                <button
                    className="
            px-8 py-3 bg-accent text-white rounded-pill font-semibold text-base
            transition-all duration-200 ease-in-out
            hover:translate-y-[-2px] hover:shadow-[0_4px_12px_rgba(0,131,143,0.3)]
            disabled:bg-inactive disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none
          "
                    onClick={onSubmit}
                    disabled={!canProceed}
                >
                    Submit
                </button>
            ) : (
                <button
                    className="
            w-12 h-12 rounded-xl bg-option-bg text-text-main border border-option-border text-2xl
            flex items-center justify-center transition-all duration-200 ease-in-out
            hover:bg-option-hover hover:border-accent
            disabled:opacity-50 disabled:cursor-not-allowed
          "
                    onClick={onNext}
                    disabled={!canProceed}
                    aria-label="Next Question"
                >
                    →
                </button>
            )}
        </div>
    );
};

export default NavigationControls;
