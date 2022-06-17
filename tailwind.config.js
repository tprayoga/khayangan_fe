/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "360px",
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1200px",
        xxl: "1440px",
      },
    },
  },
  plugins: [],
};
