/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent': '#1677BD',
        'foreground': '#8F8F8F',
        'background': '#F8F8F8',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}

