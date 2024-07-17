/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
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

        /* Dark mode colors */
        "custom-blue" : "rgb(17 24 39 / var(--tw-bg-opacity))",
        "blue-extra-dark": "#042977",
        "blue-dark": "#0d3ea7",
        "blue-medium": "#0840b8",
        "blue-light": "#0840b8",
        
        "pink-extra-dark": "#45122A",
        "pink-dark": "#60182F",
        "pink-medium": "#943F6A",
        "pink-light": "#B26A81",
        "pink-extra-light": "#D68CAC",
        "pink-light-low-opacity": "#B26A81",
        "on-hover-pink": "#943F6A",
        "dark-cream":"#D1DDFA",
        "dark-custom-purple": "#4C7766",
        "dark-on-hover-purple":"#3D5F52",
        "dark-light-pink":"#ACCEEE",
        "dark-on-hover-pink":"#7CB2E4",
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

