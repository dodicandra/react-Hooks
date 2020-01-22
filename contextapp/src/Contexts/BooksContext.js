import React, { createContext, useState } from 'react';

export const BooksContext = createContext();

const BooksContextProvider = (props) => {
  const [books, setBook] = useState([
    { title: 'almost home', id: 1 },
    { title: 'dance monkey', id: 2 },
    { title: 'perl', id: 3 },
  ]);
  return (
    <BooksContext.Provider value={{ books }}>
      {props.children}
    </BooksContext.Provider>
  );
};

export default BooksContextProvider;
