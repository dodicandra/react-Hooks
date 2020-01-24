import React, { createContext, useReducer } from 'react';
import uuid from 'uuid/v1';
import { bookReducers } from '../reducers/BookReducers';

const BooksContext = createContext();

const BooksContextProvider = (props) => {
  const [books, dispatch] = useReducer(bookReducers, []);
  return (
    <BooksContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BooksContext.Provider>
  );
};

export { BooksContext };
export default BooksContextProvider;
