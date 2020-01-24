import React, { useContext } from 'react';
import { useAnimate } from 'react-simple-animate';
import { BooksContext } from '../contexts/BooksContext';
import { ThemeContext } from '../contexts/ThemeContext';

const BooksDetails = ({ book }) => {
  const { isPurple, purple, dark } = useContext(ThemeContext);
  const theme = isPurple ? purple : dark;
  const { dispatch } = useContext(BooksContext);
  const { play, style, isPlay } = useAnimate({
    start: {
      opacity: 1,
      transform: 'translateX(0px)',
    },
    end: { opacity: 0, transform: 'translateX(800px)' },
    complete: () => {
      dispatch({ type: 'REMOVE_BOOK', id: book.id });
    },
  });
  const removeBook = () => {
    play(!isPlay);
  };
  return (
    <li
      onClick={removeBook}
      style={{ ...style, background: theme.bgNav, color: theme.cl }}
    >
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
    </li>
  );
};

export default BooksDetails;
