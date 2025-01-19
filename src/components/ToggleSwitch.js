import React, { useState, useEffect } from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = ({ isDarkMode, toggleTheme }) => {
  const [isChecked, setIsChecked] = useState(isDarkMode);

  useEffect(() => {
    setIsChecked(!isDarkMode);
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
