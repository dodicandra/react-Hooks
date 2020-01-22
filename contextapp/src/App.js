import React from 'react';
import Bookslist from './Components/Bookslist';
import Navbar from './Components/Navbar';
import ThemeToggle from './Components/ThemeToggle';
import AuthContextProvider from './Contexts/AuthContextProvider';
import ThemeContextProvider from './Contexts/themeContext';
import BooksContextProvider from './Contexts/BooksContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BooksContextProvider>
            <Bookslist>
              <ThemeToggle />
            </Bookslist>
          </BooksContextProvider>
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
