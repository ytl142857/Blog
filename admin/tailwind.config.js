/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#9f353a",
      white: "#ffffff",
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
