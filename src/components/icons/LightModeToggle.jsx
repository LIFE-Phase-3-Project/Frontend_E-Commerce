// ToggleIconExample.js
import React from 'react';
import { MdOutlineNightlight, MdOutlineNightlightRound } from 'react-icons/md';
import { useTheme } from '../../ThemeContext';


function ToggleIconExample() {
  const { isDarkMode, toggleTheme } = useTheme(false);

  const toggleIcon = () => {
    toggleTheme();
  };

  return (
    <div>
      {isDarkMode ? (
        <MdOutlineNightlightRound
          fontSize="30px"
          color="#042977"
          style={{ marginLeft: '20px', cursor: 'pointer' }}
          onClick={toggleIcon}
        />
      ) : (
        <MdOutlineNightlight
          fontSize="30px"
          color="#FAEED1"
          style={{ marginLeft: '20px', cursor: 'pointer' }}
          onClick={toggleIcon}
        />
      )}
    </div>
  );
}

export default ToggleIconExample;
