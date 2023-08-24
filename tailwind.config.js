/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        100: "rgba(23, 30, 55, 1)",
        18: "rgba(31, 40, 73, 1)",
        49: "rgba(108, 116, 125, 1)",
        22: "rgba(11, 184, 133, 1)",
      },
    },
  },
  plugins: [],
};
