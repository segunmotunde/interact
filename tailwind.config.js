/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          orange: "hsl(var(--orange))",
        },
        neutral: {
          white: "hsl(var(--white))",
          lightGrey: "hsl(var(--lightGrey))",
          darkBlue: "hsl(var(--darkBlue))",
          veryDarkBlue: "hsl(var(--veryDarkBlue))",
        },
      },
    },
  },
  plugins: [],
};
