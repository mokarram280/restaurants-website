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
      backgroundImage: {
        bannerImg: "url('/bg.png')",
        blackOverlay: "linear-gradient(90deg, rgba(5,0,8,1) 0%, rgba(255,255,254,1) 100%, rgba(252,176,69,1) 100%, rgba(0,0,0,0) 100%)",
      },
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

