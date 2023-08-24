/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        summaryActive: "rgba(11, 184, 133, 1)",
        footerText: "rgba(138, 146, 166, 1)",
        100: "rgba(23, 30, 55, 1)",
        18: "rgba(31, 40, 73, 1)",
        49: "rgba(108, 116, 125, 1)",
        22: "rgba(11, 184, 133, 1)",
        26: "rgba(21, 26, 46, 1)",
        24: "rgba(28, 36, 63, 1)",
        32: "rgba(46, 75, 133, 1)",
      },
    },
  },
  plugins: [],
};
