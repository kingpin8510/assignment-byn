// src/components/ToggleSwitch.js
import React, { useState, useEffect } from 'react';
import './ToggleSwitch.css'; // Make sure to import the CSS file

const ToggleSwitch = ({ isDarkMode, toggleTheme }) => {
  const [isChecked, setIsChecked] = useState(isDarkMode);

  useEffect(() => {
    setIsChecked(!isDarkMode); // Update state when isDarkMode changes
  }, [isDarkMode]);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    toggleTheme();
  };

  return (
    <div className="toggle-switch">
      <label className="switch-label">
        <input
          type="checkbox"
          className="checkbox"
          checked={isChecked}
          onChange={handleToggle}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default ToggleSwitch;