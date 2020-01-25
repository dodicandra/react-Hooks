import React, { useContext, useState } from 'react';
import { useTransition, animated, useSpring } from 'react-spring';
import { BooksContext } from '../contexts/BooksContext';
import { ThemeContext } from '../contexts/ThemeContext';

const BooksDetails = ({ book }) => {
  const { dispatch } = useContext(BooksContext);
  const { isPurple, purple, dark } = useContext(ThemeContext);
  const [state, toggle] = useState(true);
  const { x } = useSpring({ from: { x: 0 }, x: state ? 1 : 0 });
  const bok = useTransition(book, (book) => book.id, {
    from: { transform: 'translate3d(200px,400px,0)' },
    enter: { transform: 'translate3d(0,0px,0)' },
    leave: { transform: 'translate3d(-50%,0px,0)' },
  });
  console.log(bok);
  const theme = isPurple ? purple : dark;
  const removeBook = () => {
    toggle(!state);
    setTimeout(() => {
      dispatch({ type: 'REMOVE_BOOK', id: book.id });
    }, 1000);
  };
  return bok.map(({ item: { title, author }, props, key }) => {
    return (
      <animated.div
        key={key}
        style={{
          ...props,
          opacity: x.interpolate({ range: [0, 1], output: [0, 1] }),
        }}
      >
        <li
          onClick={removeBook}
          style={{ background: theme.bgNav, color: theme.cl }}
        >
          <div className="title">{title}</div>
          <div className="author">{author}</div>
        </li>
      </animated.div>
    );
  });
};

export default BooksDetails;
