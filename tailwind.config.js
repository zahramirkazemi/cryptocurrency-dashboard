/** @type {import('tailwindcss').Config} */

const {nextui} = require("@nextui-org/theme");

module.exports = {
  content: [
    "./node_modules/@nextui-org/theme/dist/components/(button|table|input).js",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
}