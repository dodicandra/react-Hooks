import React from 'react';
import BooksContextProvider from './contexts/BooksContext';
import Navbar from './Components/Navbar';
import BooksList from './Components/BooksList';
import BookForm from './Components/BookForm';
import ThemeContextProvider from './contexts/ThemeContext';
import Container from './Components/Container';

function App() {
  return (
    <ThemeContextProvider>
      <Container>
        <BooksContextProvider>
          <Navbar />
          <BooksList />
          <BookForm />
        </BooksContextProvider>
      </Container>
    </ThemeContextProvider>
  );
}

export default App;
