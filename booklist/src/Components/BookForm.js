import React, { useContext, useState } from 'react';
import { BooksContext } from '../contexts/BooksContext';

const BookForm = () => {
  const { addBook } = useContext(BooksContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const handleSumbit = (e) => {
    e.preventDefault();
    addBook(title, author);
    setTitle('');
    setAuthor('');
  };
  return (
    <form onSubmit={handleSumbit}>
      <input
        type="text"
        placeholder="Book title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <input type="submit" value="add Book" />
    </form>
  );
};

export default BookForm;
