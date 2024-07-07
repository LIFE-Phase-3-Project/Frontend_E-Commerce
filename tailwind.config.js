/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "custom-green" : "#4C7766",
        "green-dark": "#186049",
        "green-medium": "#3F9469",
        "on-hover-green": "#2a443a",
        "cream":"#FAEED1",
        "custom-purple": "#774C5D",
        "on-hover-purple":"#5f3d4a",
        "light-pink":"#EECCAC",
        "on-hover-pink":"#e4ae7c",
      }
    },
    screens:{
      'sm': '550px',    
      'md': '768px',     
      'lg': '1024px',   
      'xl': '1280px',    
      '2xl': '1536px',   
    }
  },
  plugins: [],
}

