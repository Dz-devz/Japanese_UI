/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{html,tsx}",
    "./components/**/*.{html,tsx}",
  ],
  theme: {
    extend: {
      cursor: {
        sakura: "url(public/assets/Sakura_Arrow.cur), pointer",
      },
    },
    fontFamily: {
      sans: ["Sacramento", "cursive"],
      reenie: ["Reenie Beanie", "cursive"],
    },
  },
  plugins: [],
};
