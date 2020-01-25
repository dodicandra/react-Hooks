import React, { useContext } from 'react';
import { BooksContext } from '../contexts/BooksContext';
import { ThemeContext } from '../contexts/ThemeContext';
import Toggle from './Toggle';

const Navbar = () => {
  const { isPurple, purple, dark } = useContext(ThemeContext);
  const { books } = useContext(BooksContext);
  const theme = isPurple ? purple : dark;
  return (
    <div
      style={{ background: theme.bgNav, color: theme.cl }}
      className="navbar"
    >
      <h1>dodi reading list</h1>
      <p>Currenly you have {books.length} books to get through...</p>
      <Toggle />
    </div>
  );
};

export default Navbar;
