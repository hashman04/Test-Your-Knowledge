/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'bg-start': '#E0F7FA',
                'bg-end': '#80DEEA',
                'card-bg': '#FFFFFF',
                'text-main': '#006064', // Deep Teal
                'text-sub': '#546E7A',  // Muted Gray-Blue
                'accent': '#0097A7',    // Dark Teal
                'inactive': '#ECEFF1',
                'option-bg': '#E0F7FA',
                'option-border': '#B2EBF2',
                'option-hover': '#B2EBF2',
                'option-selected-bg': 'rgba(0, 151, 167, 0.15)',
                'option-selected-border': '#006064',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
            borderRadius: {
                'card': '40px',
                'option': '10px',
                'pill': '999px',
            },
            boxShadow: {
                'soft': '0 24px 48px -12px rgba(0, 96, 100, 0.18)',
            },
            width: {
                'card': '960px',
            },
            padding: {
                'card': '56px',
            }
        },
    },
    plugins: [],
}
