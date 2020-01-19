import React, { Component } from 'react';
import { ThemeContext } from '../Contexts/themeContext';

export default class Bookslist extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(context) => {
          const { isLightTheme, light, dark } = context;
          const theme = isLightTheme ? light : dark;
          return (
            <div
              className='book-list'
              style={{ background: theme.bg, color: theme.syntax }}
            >
              <ul>
                <li style={{ background: theme.ui }}>react Context API</li>
                <li style={{ background: theme.ui }}>the net ninja</li>
                <li style={{ background: theme.ui }}>the way of kings</li>
              </ul>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
