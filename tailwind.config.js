/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "banner": "url('./src/assets/bg (1).png')",
        "elipse": "url('./src/assets/icon-elipse.svg')"
      },
      fontFamily: {
        "roboto": ["Roboto", "sans-serif"]
      },

      backgroundColor: {
        'blue-660': '#554DDE',
        'back-color': '#F2F6FF'
      },
      colors: {
        'blue-660': '#554DDE',
        "blue-330": "#6A6D9E"
      }
    },
  },
  plugins: [],
}

