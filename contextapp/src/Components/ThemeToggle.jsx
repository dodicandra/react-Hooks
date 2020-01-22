import React, { useContext } from 'react';
import { ThemeContext } from '../Contexts/themeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? dark : light;
  return (
    <>
      <button
        className="btn"
        style={{ background: theme.ui, color: theme.syntax }}
        onClick={toggleTheme}
      >
        Change Theme
      </button>
    </>
  );
};

export default ThemeToggle;
