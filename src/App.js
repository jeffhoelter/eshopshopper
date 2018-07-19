import React, { Component } from 'react';
import SwitchEshop from 'nintendo-switch-eshop';
import logo from './logo.svg';
import './App.css';
import api from './Api';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
  componentDidMount() {
    api.fetchPopularRepos('JavaScript').then(repos => {
      console.log(repos);
    });
    loadStore();
  }
}

const loadStore = () => {
  const requestOptions = {
    locale: '',
    limit: 100
  };

  SwitchEshop.getGamesAmerica([requestOptions])
    .then(value => {
      console.log(value);
      return value; //set state here
    })
    .catch(error => {
      console.log('Promise Error: ' + error);
    });
};

export default App;
