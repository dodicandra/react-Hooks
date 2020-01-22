import React, { useContext } from 'react';
import { BooksContext } from '../contexts/BooksContext';

const Navbar = () => {
  const { books } = useContext(BooksContext);
  return (
    <div class="navbar">
      <h1>dodi reading lsit</h1>
      <p>Currenly you have {books.length} books to get through...</p>
    </div>
  );
};

export default Navbar;
