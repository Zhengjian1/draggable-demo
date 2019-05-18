import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { getQuotes } from './data';
import QuoteApp from './QuoteApp';


class App extends Component {

  state = {
    data: []
  }

  render() {

    const quoteMap = {
      '1': getQuotes(4),
      '2': getQuotes(4),
      '3': getQuotes(4),
    };
    
    return (
      <div className="App"  >
        <QuoteApp initial={quoteMap} />
      </div>
    );
  }
}

export default App;
