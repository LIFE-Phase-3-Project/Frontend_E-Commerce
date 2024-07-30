import React, { useEffect } from 'react';
import { MdOutlineNightlight, MdOutlineNightlightRound } from 'react-icons/md';
import { FiSun } from "react-icons/fi";
import { darkMode, lightMode } from '../../redux/slices/darkModeSlice';
import { useDispatch, useSelector } from 'react-redux';

function DarkTheme({fontSize="30px", marginLeft="20px"}) {
  const dispatch = useDispatch();
  const darkModeState = useSelector(state => state.darkTheme.darkMode);

  const handleDark = () => {
    const newTheme = !darkModeState;
    localStorage.setItem('darkMode', newTheme);
    if (newTheme) {
        dispatch(darkMode());
    } else {
        dispatch(lightMode());
    }
  }

  useEffect(() => {
    document.body.classList.toggle('dark', darkModeState);
  }, [darkModeState]);

  return (
    <div>
      {darkModeState ? (
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
