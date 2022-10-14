/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./screens/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require("@tailwindcss/forms")],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Kanit", ...defaultTheme.fontFamily.sans],
        serif: ["Taviraj", ...defaultTheme.fontFamily.serif],
        mono: ["Azeret Mono", ...defaultTheme.fontFamily.mono],
      },
    },
  },
};
