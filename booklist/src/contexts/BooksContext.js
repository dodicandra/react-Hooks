import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';

export const BooksContext = createContext();

const BooksContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: 'dodi candra', author: 'candra', id: 1 },
    { title: 'teh pucuk', author: 'candra', id: 2 },
    { title: 'chelsea', author: 'candra', id: 3 },
  ]);
  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: uuid() }]);
  };
  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };
  return (
    <BooksContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BooksContext.Provider>
  );
};

export default BooksContextProvider;
