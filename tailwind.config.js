/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        great_vibes: ["Great Vibes", "sans-serif"],
        comfortaa: ["Comfortaa", "sans-serif"],
        dancing: ["Dancing Script", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        pink: "#c89d9c",
      },
    },
  },

  plugins: [],
};
