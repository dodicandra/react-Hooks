import React from 'react';
import Bookslist from './Components/Bookslist';
import Navbar from './Components/Navbar';
import ThemeToggle from './Components/ThemeToggle';
import AuthContextProvider from './Contexts/AuthContextProvider';
import ThemeContextProvider from './Contexts/themeContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <Bookslist>
            <ThemeToggle />
          </Bookslist>
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
