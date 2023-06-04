/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      aspectRatio: {
        "4/3": "4 / 3",
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(.61,.05,.42,.92)",
      },
    },
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "960px",
      // => @media (min-width: 1024px) { ... }

      xl: "1140px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1366px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [require("tailwindcss/nesting")],
};
