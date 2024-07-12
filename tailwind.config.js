/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "custom-green" : "#4C7766",
        "green-extra-dark": "#12452d",
        "green-dark": "#186049",
        "green-medium": "#3F9469",
        "green-light": "#6AB29B",
        "green-extra-light": "#8cd6b6ac",
        "green-light-low-opacity": "#6ab29b7e",
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

