import React from 'react';
import './app.css';
import {Quote} from "./Quote";

import quotes from '../data/quotes.json';

function pickRandomItem(arr) {
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

function App() {
  const quote = pickRandomItem(quotes);

  return (
    <div className="app">
      <main>
        <h1>Quote of the day!</h1>
        <Quote author={quote.author} content={quote.content}/>
      </main>
    </div>
  );
}

export default App;