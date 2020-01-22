import React, { Component } from 'react';
import { ThemeContext } from '../Contexts/themeContext';
import './ThemeToggle.css';

export default class ThemeToggle extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? dark : light;
    const { toggleTheme } = this.context;
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
  }
}
