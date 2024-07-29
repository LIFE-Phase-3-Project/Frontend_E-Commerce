import React, { useEffect, useState } from 'react';
import { MdOutlineNightlight, MdOutlineNightlightRound } from 'react-icons/md';
import { FiSun } from "react-icons/fi";
import { darkMode, lightMode } from '../../redux/slices/darkModeSlice';
import { useDispatch } from 'react-redux';


function DarkTheme({fontSize="30px", marginLeft="20px"}) {
  const [theme, setTheme] = useState(() => localStorage.getItem('darkMode') === 'true')

  const dispatch = useDispatch()

  const handleDark = () => {
    const newTheme = !theme;
    localStorage.setItem('darkMode', newTheme);
    setTheme(newTheme); 

    if (newTheme) {
        dispatch(darkMode());
    } else {
        dispatch(lightMode());
    }
  }
useEffect(() => {
    document.body.classList.toggle('dark', theme);
  }, [theme]);

  return (
    <div>
      {theme ? (
        <FiSun
          fontSize={fontSize}
          color="#FAEED1"
          style={{ marginLeft: marginLeft, cursor: 'pointer' }}
          onClick={handleDark}
        />
      ) : (
        <MdOutlineNightlight
          fontSize={fontSize}
          color="#FAEED1"
          style={{ marginLeft: marginLeft, cursor: 'pointer' }}
          onClick={handleDark}
        />
      )}
    </div>
  );
}

export default DarkTheme;