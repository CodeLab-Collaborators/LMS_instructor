/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        medium: { max: "768px" },
        small: { max: "425px" },
      },
      backgroundImage: {
        peter: "url('/image/buttom-left.webp')",
      },
    },
    fontFamily: {
      ath: ["athletics"],
      ath1: ["athleticsLight"],
      ath2: ["athleticsMedium"],
      ath3: ["athleticsMedium"],
    },
  },
  plugins: [],
};
