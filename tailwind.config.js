/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      "smallPhone": "300px",
      "mobile": "481px",
      "tablet": "768px",
      "Ltablet": "992px",
      "desktop": "1300px"
    },
    extend: {},
  },
  plugins: [],
}

