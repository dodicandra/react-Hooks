import React, { useContext } from 'react';
import { BooksContext } from '../contexts/BooksContext';

const BooksDetails = ({ book }) => {
  console.log(useContext(BooksContext));
  const { removeBook } = useContext(BooksContext);
  return (
    <li onClick={() => removeBook(book.id)}>
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
    </li>
  );
};

export default BooksDetails;
