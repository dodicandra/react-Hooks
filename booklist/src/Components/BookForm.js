import React, { useContext, useState } from 'react';
import { BooksContext } from '../contexts/BooksContext';
import { ThemeContext } from '../contexts/ThemeContext';

const BookForm = () => {
  const { isPurple, purple, dark } = useContext(ThemeContext);
  const theme = isPurple ? purple : dark;
  const { dispatch } = useContext(BooksContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const handleSumbit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_BOOK',
      book: {
        title,
        author,
      },
    });
    setTitle('');
    setAuthor('');
  };
  return (
    <form onSubmit={handleSumbit}>
      <input
        style={{ background: theme.bgIn }}
        type="text"
        placeholder="Book title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        style={{ background: theme.bgIn }}
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <input
        style={{ background: theme.bgNav, color: theme.cl }}
        type="submit"
        value="add Book"
      />
    </form>
  );
};

export default BookForm;
