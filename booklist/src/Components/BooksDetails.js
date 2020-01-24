import React, { useContext } from 'react';
import { BooksContext } from '../contexts/BooksContext';

const BooksDetails = ({ book }) => {
  console.log(useContext(BooksContext));
  const { dispatch } = useContext(BooksContext);
  const removeBook = () => {
    dispatch({ type: 'REMOVE_BOOK', id: book.id });
  };
  return (
    <li onClick={removeBook}>
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
    </li>
  );
};

export default BooksDetails;
