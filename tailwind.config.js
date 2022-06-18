/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    
    extend: {
      keyframes:{
        wiggle: {
          '0%': { transform: 'translateY(-1rem)' },
          '100%': { transform: 'translateY(0rem)'}
        }
      },
      animation: {
        wiggle: 'wiggle 0.3s'
      },
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
