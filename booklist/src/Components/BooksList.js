import React, { useContext } from 'react';
import { BooksContext } from '../contexts/BooksContext';
import BooksDetails from './BooksDetails';
import { ThemeContext } from '../contexts/ThemeContext';

const BooksList = () => {
  const { books } = useContext(BooksContext);
  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map((book) => {
          return <BooksDetails key={book.id} book={book} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No Books to read , hello free time</div>
  );
};

export default BooksList;
