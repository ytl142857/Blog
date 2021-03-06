/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#9f353a",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
