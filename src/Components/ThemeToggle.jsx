import React, { Component } from 'react';
import { ThemeContext } from '../Contexts/themeContext';

export default class ThemeToggle extends Component {
  static contextType = ThemeContext;
  render() {
    const { toggleTheme } = this.context;
    return (
      <>
        <button onClick={toggleTheme}>Change Theme</button>
      </>
    );
  }
}
