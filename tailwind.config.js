/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent1: "rgb(var(--color-accent1) / <alpha-value>)",
        accent2: "rgb(var(--color-accent2) / <alpha-value>  )",
        bkg: "rgb( var(--color-bkg) / <alpha-value> )",
        content: "rgb(var(--color-content) / <alpha-value>)",
        heading: "rgb(var(--color-heading) / <alpha-value>)",

        // accent1: "rgb(var(--color-accent1) / <alpha-value> )",
        // accent2: "rgb(var(--color-accent2) / <alpha-value> )",
      },
    },
  },
  plugins: [],
};
