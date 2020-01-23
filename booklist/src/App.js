import React from 'react';
import BooksContextProvider from './contexts/BooksContext';
import Navbar from './Components/Navbar';
import BooksList from './Components/BooksList';
import BookForm from './Components/BookForm';

function App() {
  return (
    <div className="App">
      <BooksContextProvider>
        <Navbar />
        <BooksList />
        <BookForm />
      </BooksContextProvider>
    </div>
  );
}

export default App;
