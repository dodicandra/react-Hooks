import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Container = (props) => {
  const { isPurple, purple, dark } = useContext(ThemeContext);
  const theme = isPurple ? purple : dark;
  return (
    <div style={{ background: theme.bgApp }} className="App">
      {props.children}
    </div>
  );
};

export default Container;
