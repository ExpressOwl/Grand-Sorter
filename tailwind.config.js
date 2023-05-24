/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        PTSerif: ["PT Serif", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
