/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // make sure to include your source files here
  ],
  darkMode: "class",  // enable dark mode using class strategy
  theme: {
    extend: {
      backgroundImage: {
        "leaf-pattern": "url('/leaf-pattern.svg')",
      },
      colors: {
        ecoGreen: {
          DEFAULT: "#2a9d8f",
          dark: "#1f6159",
          light: "#81c8b4",
        },
        ecoBackground: {
          DEFAULT: "#e6f2ef",
          dark: "#142821",
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
