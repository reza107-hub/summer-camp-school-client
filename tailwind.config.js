/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#007BFF",

          "secondary": "#FFC107",

          "accent": "#FF5A5F",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

