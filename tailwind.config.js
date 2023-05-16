/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        "light-gray": "#EAEAEA",
      },
      textShadow: {
        slide: "2px 2px 4px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
