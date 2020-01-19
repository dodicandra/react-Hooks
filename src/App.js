import React from 'react';
import Navbar from './Components/Navbar';
import Bookslist from './Components/Bookslist';
import ThemeContextProvider from './Contexts/themeContext';

function App() {
  return (
    <div className='App'>
      <ThemeContextProvider>
        <Navbar />
        <Bookslist />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
