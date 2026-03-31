/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: ["text-[22px]", "font-black", "text-secondary", "bold-span"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(var(--primary))",
        secondary: "rgba(var(--secondary))",
        cc: "red",
      },
      fontFamily: {
        txt: ["Marcellus", "serif"],
        name: ["Ginger", "serif"],
      },
      screens: {
        xs: "400px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        xxl: "1400px",
      },
    },
  },
  darkMode: "selector",
  plugins: [],
  safelist: ["text-[22px]", "font-black", "text-secondary", "bold-span"],
};
