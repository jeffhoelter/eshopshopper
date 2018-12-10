import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';

class Games extends Component {
  state = {
    games: {},
    updateTime: new Date(),
    loading: true
  };

  componentDidMount() {
    console.log('componentDidMount');
    fetch('/games')
      .then(res => res.json())
      .then(responseJSON => {
        console.log(responseJSON);
        this.setState({
          games: responseJSON.games,
          updateTime: responseJSON.updateTime,
          loading: false
        });
      })
      .catch(function(err) {
        //console.log(err);
        console.log('error');
      });
  }

  render() {
    if (this.state.loading) {
      return <img src={logo} className="App-logo" alt="logo" data-testid="spinner" />;
    } else {
      return (
        <div align="center" className="Games">
          <h3>Last update date: {this.state.updateTime}</h3>
          <table className="pure-table pure-table-bordered pure-table-striped" data-testid="games-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Release Date</th>
                <th>Box Art</th>
                <th>Price</th>
              </tr>
            </thead>

            <tbody>
              {this.state.games.map(game => {
                return (
                  <tr key={game.id}>
                    <td>{game.title}</td>
                    <td>{game.release_date}</td>
                    <td>
                      <img alt={game.title} height="120" width="120" src={game.front_box_art} />
                    </td>
                    <td>${game.eshop_price}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    }
  }
}

export default Games;
