import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Games from './Games';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <link
            rel="stylesheet"
            href="https://unpkg.com/purecss@1.0.0/build/pure-min.css"
            integrity="sha384-nn4HPE8lTHyVtfCBi5yW9d20FjT8BJwUXyWZT9InLYax14RDjBj46LmSztkmNP9w"
            crossOrigin="anonymous"
          />

          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Nintendo eShop Games (US)</h1>
        </header>
        <Games />
      </div>
    );
  }
}

export default App;
