import React, { useContext } from 'react';
import { useAnimate } from 'react-simple-animate';
import { BooksContext } from '../contexts/BooksContext';

const BooksDetails = ({ book }) => {
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
    <li onClick={removeBook} style={style}>
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
    </li>
  );
};

export default BooksDetails;
