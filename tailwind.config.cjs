/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ivory: "#fefffa",
        "boston-blue": {
          50: "#f0f9fb",
          100: "#daeef3",
          200: "#b8dee9",
          300: "#88c6d8",
          400: "#50a4c0",
          500: "#3a98b9",
          600: "#2e6f8c",
          700: "#2b5b73",
          800: "#2a4d60",
          900: "#274152",
          950: "#152937",
        },
      },
      fontFamily: {
        righteous: ["'Righteous'", "cursive", "sans-serif"],
        notoSans: ["'Noto Sans TC'", "Verdana", "sans-serif"],
      },
    },
  },
  plugins: [],
};
