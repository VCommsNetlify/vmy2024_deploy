/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            backgroundImage: {},
            screens: {
                "hover-hover": { raw: "(hover: hover)" },
            },
        },
    },
    plugins: [],
    corePlugins: {
        visibility: false,
    },
};
