import React, { Component } from 'react';
import { ThemeContext } from '../Contexts/themeContext';

export default class Bookslist extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div
        className="book-list"
        style={{ background: theme.bg, color: theme.syntax }}
      >
        <ul>
          <li style={{ background: theme.ui }}>react Context API</li>
          <li style={{ background: theme.ui }}>the net ninja</li>
          <li style={{ background: theme.ui }}>the way of kings</li>
        </ul>
        <div>{this.props.children}</div>
      </div>
    );
  }
}
