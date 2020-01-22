import React, { useContext } from 'react';
import { ThemeContext } from '../Contexts/themeContext';
import { BooksContext } from '../Contexts/BooksContext';

const Bookslist = (props) => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const { books } = useContext(BooksContext);
  return (
    <div
      className="book-list"
      style={{ background: theme.bg, color: theme.syntax }}
    >
      <ul>
        {books.map((bok) => {
          return (
            <li key={bok.id} style={{ background: theme.ui }}>
              {bok.title}
            </li>
          );
        })}
      </ul>
      <div>{props.children}</div>
    </div>
  );
};

export default Bookslist;
