import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';

class Games extends Component {
  state = { games: [], loading: true };

  componentDidMount() {
    fetch('/games')
      .then(res => res.json())
      .then(games => {
        this.setState({ games });
        this.setState({ loading: false });
        console.log(`this.state.games: ${this.state.games}`);
      });
  }

  render() {
    if (this.state.loading) {
      return <img src={logo} className="App-logo" alt="logo" />;
    } else {
      return (
        <div align="center" className="Games">
          <table class="pure-table pure-table-bordered pure-table-striped">
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
                      <img height="120" width="120" src={game.front_box_art} />
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
