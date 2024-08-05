import './App.css';
import React, { useEffect } from 'react';
import { AppRoutes } from "./routes/AppRoutes";
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { darkMode, lightMode } from './redux/slices/darkModeSlice';

function App() {  
  const location = useLocation();
  const dispatch = useDispatch();
  const darkModeState = useSelector(state => state.darkTheme.darkMode);
  
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === ';') {
        const menuButton = document.getElementById('menu-button');
         menuButton && menuButton.click(); 

        darkModeState ? dispatch(lightMode()) : dispatch(darkMode());
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch, darkModeState]);

  useEffect(() => {
    document.body.className = darkModeState ? "dark" : ""
  }, [darkModeState, location.pathname]);

  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
