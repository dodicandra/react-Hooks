import React, { useContext } from 'react';
import { ThemeContext } from '../Contexts/themeContext';
import { AuthContext } from '../Contexts/AuthContextProvider';

const Navbar = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const theme = isLightTheme ? light : dark;
  return (
    <nav
      style={{
        background: theme.ui,
        color: theme.syntax,
      }}
    >
      <h1>Context App</h1>
      <div onClick={toggleAuth}>{isAuthenticated ? 'Login' : 'Logout'}</div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
