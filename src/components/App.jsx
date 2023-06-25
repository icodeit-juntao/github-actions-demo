import React from 'react';
import './app.css';

import {Quote} from "./Quote";
import { useDownloadQuote } from './useDownloadQuote';
import { useFetchQuote } from './useFetchQuote';


function App() {
  const { quoteRef, generateQuoteImage } = useDownloadQuote();
  const {loading, quote} = useFetchQuote();
  
  return (
    <div data-testid="quote-container">
      {quote && <Quote author={quote.author} content={quote.content} ref={quoteRef} />}

      <div className="actions">
        <button onClick={generateQuoteImage}>download</button>
      </div>
    </div>
  );
}

export default App;