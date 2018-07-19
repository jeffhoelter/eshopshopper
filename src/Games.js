import React, { Component } from 'react';
import './App.css';

class Games extends Component {
  state = { games: [] };

  componentDidMount() {
    fetch('/games')
      .then(res => res.json())
      .then(games => {
        this.setState({ games });
        console.log(`this.state.games: ${this.state.games}`);
      });
  }

  render() {
    return (
      <div className="Games">
        <h1>Games</h1>
        {this.state.games.map(game => {
          return <div key={game.id}>{game.title}</div>;
        })}
      </div>
    );
  }
}

export default Games;
