import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            borderRadius: {
                sm: "1.25rem",
                md: "2.185rem",
                lg: "3.125rem",
            },
            colors: {
                "blue-2": "#263146",
                "blue-4": "#AEB9D2",
                "blue-5": "#D6E1FA",
                "blue-6": "#4C5576",
                "blue-7": "#22304D",
                "accent-green": "#11F4D1",
                background: "#1C2949",
                mainColor: "#D6E1FA",
                card: "rgba(255, 255, 255, 0.03)",
                accentGreen: "#11F4D1",
                blue7: "#22304D",
                cardCombined: "rgb(37, 48, 77)",
            },
            fontSize: {
                15: "0.9375rem",
            },
            height: {
                15: "3.75rem",
            },
            fontFamily: {
                ceraPro: "Cera Pro",
            },
            screens: {
                "wishes-xxl": { max: "1920px" },
                "wishes-2xl": { max: "1537px" },

                "wishes-xl": { max: "1279px" },
                // => @media (max-width: 1279px) { ... }

                "wishes-lg": { max: "1023px" },
                // => @media (max-width: 1023px) { ... }

                "wishes-md": { max: "767px" },
                // => @media (max-width: 767px) { ... }

                "wishes-sm": { max: "639px" },
                // => @media (max-width: 639px) { ... }
            },
        },
    },
    plugins: [require("tailwind-scrollbar")],
};
export default config;
