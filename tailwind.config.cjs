/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  safelist: [
    // add for tags size
    "text-[1.25rem]",
    "text-[1.3125rem]",
    "text-[1.375rem]",
    "text-[1.4375rem]",
    "text-[1.5rem]",
    "text-[1.5625rem]",
    "text-[1.5625rem]",
    "text-[1.625rem]",
    "text-[1.6875rem]",
    "text-[1.75rem]",
    "text-[1.8125rem]",
    "text-[1.875rem]",
    "text-[1.9325rem]",
    "text-[2rem]",
    "text-[2.0625rem]",
    "text-[2.125rem]",
    "text-[2.1875rem]",
    "text-[2.25rem]",

    //add for posts
    //heading
    "text-4xl",
    "font-bold",
    "scroll-mt-16",
    "text-boston-blue-800",
    "dark:text-boston-blue-100",
    "my-2",
    "text-2xl",
    "text-boston-blue-700",
    "dark:text-boston-blue-200",
    "text-xl",
    "text-boston-blue-600",
    "dark:text-boston-blue-300",
    "text-lg",
    // horizontal line
    "border-t-8",
    "w-52",
    "mx-auto",
    "my-4",
    "border-orange-200",
    "dark:border-neutral-400",
    "border-double",
    //black quote
    "p-4",
    "bg-amber-50",
    "dark:bg-neutral-800",
    "border-l-4",
    "dark:border-neutral-700",
    "my-2",
    //anchor
    "text-amber-600",
    "dark:text-amber-200",
    //list
    "list-decimal",
    "list-inside",
    "p-2",
    //strong
    "dark:text-neutral-200",
  ],
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
