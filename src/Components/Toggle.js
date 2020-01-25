import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Toggle = () => {
  const { toggleTheme } = useContext(ThemeContext);
  const { isPurple, purple, dark } = useContext(ThemeContext);
  const theme = isPurple ? dark : purple;
  return (
    <button
      className="btn"
      style={{ background: theme.bgApp, color: theme.cl }}
      onClick={toggleTheme}
    >
      Theme
    </button>
  );
};

export default Toggle;
