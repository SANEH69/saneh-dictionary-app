import React from 'react';
import Footer from './Footer';
import './App.css';
import Dictionary from './Dictionary';

function App() {
  return (
    <div className="App">
      <div className="App-content">
      <header className="App-header">
       Please type the word you'd like to know the meaning of...
      </header>
      <Dictionary />
      <Footer />
      </div>
    </div>
  );
}

export default App;
