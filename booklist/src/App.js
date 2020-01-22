import React from 'react';
import './App.css';
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
