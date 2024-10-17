/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: {
          DEFAULT: "#FF9C01",
          100: "#FF9001",
          200: "#FF8E01",
        },
        black: {
          DEFAULT: "#FFFFFF",
          100: "#F0F0F0",
          200: "#E5E5E5",
        },
        gray: {
          100: "#F5F5F5",
        },
      }      
    },
  },
  plugins: [],
};