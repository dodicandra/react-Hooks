import React from 'react';
import BooksContextProvider from './contexts/BooksContext';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <BooksContextProvider>
        <Navbar />
      </BooksContextProvider>
    </div>
  );
}

export default App;
