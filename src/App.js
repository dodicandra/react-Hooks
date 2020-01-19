import React from 'react';
import Navbar from './Components/Navbar';
import Bookslist from './Components/Bookslist';
import ThemeContextProvider from './Contexts/themeContext';
import ThemeToggle from './Components/ThemeToggle';

function App() {
  return (
    <div className='App'>
      <ThemeContextProvider>
        <Navbar />
        <Bookslist />
        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
