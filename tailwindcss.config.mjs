/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}"], // tells Tailwind where to look for classes
    theme: {
        extend: {
            colors:{
                lightHover:"#fcf4ff",
                darkHover:"#2a004a",
                darkTheme:"#11001F",
            },
            fontFamily:{
                Outfit:["Outfit","sans-serif"],
                Ovo:["Ovo","serif"],
            },
        },
    },
    plugins: [],
};
