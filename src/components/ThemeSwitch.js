import React, { useState } from 'react';
import './ThemeSwitch.css';

export default function ThemeSwitch({ onToggle }) {
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    onToggle(!isChecked);
  };

  return (
    <div className="checkbox-wrapper-5">
      <div className="check">
        <input
          type="checkbox"
          id="check-5"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="check-5"></label>
      </div>
    </div>
  );
}
