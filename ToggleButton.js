import React, { useState } from 'react';

function ToggleButton() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // You can store the dark mode preference in localStorage or a global state management system like Redux.
  };

  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? 'Dark Mode On' : 'Dark Mode Off'}
    </button>
  );
}

export default ToggleButton;
