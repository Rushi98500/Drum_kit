/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#007bff',
        'brand-red': '#ff4136',
      },
      fontFamily: {
        'body': ['Open Sans', 'sans-serif'],
        'display': ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


  
  

