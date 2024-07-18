import React, { useEffect, useState } from 'react';
import { MdOutlineNightlight, MdOutlineNightlightRound } from 'react-icons/md';
import { darkMode, lightMode } from '../../redux/slices/darkModeSlice';
import { useDispatch } from 'react-redux';


function DarkTheme() {
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
        <MdOutlineNightlightRound
          fontSize="30px"
          color="#042977"
          style={{ marginLeft: '20px', cursor: 'pointer' }}
          onClick={handleDark}
        />
      ) : (
        <MdOutlineNightlight
          fontSize="30px"
          color="#FAEED1"
          style={{ marginLeft: '20px', cursor: 'pointer' }}
          onClick={handleDark}
        />
      )}
    </div>
  );
}

export default DarkTheme;