import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isPurple: true,
    purple: {
      clr: '#eee',
      cl: '#eee',
      bgApp: '#4c2a4c',
      bgNav: '#6d3d6d',
      bgIn: '#3c1f3c',
      bgBD: '#553055',
    },
    dark: {
      clr: '#333',
      cl: '#eee',
      bgApp: '#555',
      bgNav: '#333',
      bgIn: '#ddd',
      bgBD: 'gray',
    },
  };

  toggleTheme = () => {
    const body = document.querySelector('body');
    body.style.backgroundColor = `${
      this.state.isPurple ? this.state.dark.bgBD : this.state.purple.bgBD
    }`;
    this.setState({
      isPurple: !this.state.isPurple,
    });
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
