import './App.css';
import React, { useEffect } from 'react';
import { AppRoutes } from "./routes/AppRoutes";
import { useSelector } from 'react-redux';


function App() {
  const darkMode = useSelector(state => state.darkTheme.darkMode);

  console.log("darkMode")
  console.log(darkMode)

  useEffect(() => {
    document.body.className = darkMode ? "dark" : ""
  }, [darkMode])
  return (
    <div className="App">
      
      <AppRoutes />
  
    </div>
  );
}

export default App;
