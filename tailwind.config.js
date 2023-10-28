/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      "mobile": "481px",
      "tablet": "768px",
      "Ltablet": "992px",
      "desktop": "1200px"
    },
    extend: {},
  },
  plugins: [],
}

