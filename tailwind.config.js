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
        "green-super-light": "#a7fed88f",
        "green-light-low-opacity": "#6ab29b7e",
        "on-hover-green": "#2a443a",
        "cream":"#FAEED1",
        "custom-purple": "#774C5D",
        "on-hover-purple":"#5f3d4a",
        "light-pink":"#EECCAC",
        "on-hover-pink":"#e4ae7c",
        "overlay": "#000000b3",


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

        "dark-light-pink":"#ACCEEE",
        "dark-on-hover-pink":"#7CB2E4",

        "dark-cream":"#D1DDFA",
        
        "custom-purple": "#10002b",
        "purple-extra-dark": "#240046",
        "purple-dark": "#3c096c",
        "purple-medium": "#5a189a",
        "purple-light": "#7b2cbf",
        "purple-extra-light": "#c77dff",
        "dark-on-hover-purple":"#3D5F52",

       

        // dark for admin dashboard
        "admin-blue-color": "#141b2d",
        "admin-green-dashboard-color": "#24794e",
        "admin-sidebar-color": "#1F2A40",
        "dashboard-light-color": "#727681",
        "dashboard-extra-light": "#d0d1d5"
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

