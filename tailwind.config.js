/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "560px",
      // => @media (min-width: 640px) { ... }

      md: "740px",
      // => @media (min-width: 768px) { ... }

      lg: "1080px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        myellow: "#F9BF24",
      },
    },
  },
  plugins: [],
};
