/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                "custom-gray": "#1F1867",
                "custom-red": "#D24F6B",
                "custom-green": "#588B71",
                "transparent": "transparent",
            },
            backgroundImage: {
                river: "url('./src/assets/img/river_bg.png')",
                river_vertical: "url('./src/assets/img/river_bg_vertical.jpg')",
            },
        },
    },
    plugins: [],
};
