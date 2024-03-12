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
        "elipse": "url('./src/assets/icon-elipse.svg')",
        "bg": "url('./src/assets/bg2.png')"
      },
      fontFamily: {
        "roboto": ["Roboto", "sans-serif"]
      },

      backgroundColor: {
        'blue-660': '#554DDE',
        'back-color': '#F2F6FF'
      },
      colors: {
        'blue-dark': '#16194F',
        'blue-660': '#554DDE',
        "blue-330": "#6A6D9E",
        'pink-light': '#F44E77'
      },
      content: {
        'check': "url('./src/assets/check.svg')"
      }
    },
  },
  plugins: [],
}

