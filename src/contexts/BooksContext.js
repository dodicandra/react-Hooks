import React, { createContext, useReducer, useEffect } from 'react';
import { bookReducers } from '../reducers/BookReducers';

const BooksContext = createContext();

const BooksContextProvider = (props) => {
  const [books, dispatch] = useReducer(bookReducers, [], () => {
    const localData = localStorage.getItem('books');
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  });
  return (
    <BooksContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BooksContext.Provider>
  );
};

export { BooksContext };
export default BooksContextProvider;
