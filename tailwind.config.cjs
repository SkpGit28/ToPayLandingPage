/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./routes/**/*.{js,ts,jsx,tsx}",
        "./*.{js,ts,jsx,tsx}" // Matches App.tsx, index.tsx in the root
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['"Plus Jakarta Sans"', 'sans-serif'],
            },
            letterSpacing: {
                'tightest': '-0.02em',
            },
            colors: {
                brand: {
                    primary: '#E33441',
                    secondary: '#2951A0',
                },
                text: {
                    main: '#1D2735',
                    muted: '#4B5563',
                }
            },
            animation: {
                'marquee-up': 'marquee-up 60s linear infinite',
                'marquee-down': 'marquee-down 60s linear infinite',
            },
            keyframes: {
                'marquee-up': {
                    '0%': { transform: 'translateY(0)' },
                    '100%': { transform: 'translateY(-50%)' },
                },
                'marquee-down': {
                    '0%': { transform: 'translateY(-50%)' },
                    '100%': { transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [],
};
