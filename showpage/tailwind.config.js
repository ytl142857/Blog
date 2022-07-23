/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#182e59",
        second: "#f9a647",
        third: "#edcfab",
      },
      spacing: {
        "600px": "600px",
        "800px": "800px",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
