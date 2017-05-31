import React, { Component } from 'react';
import './App.css';
import list from './generation1.json';
import Tile from './Tile';

class App extends Component {
  render() {
    return (
      <div>
        {list.pokemon_species.map( (pokemon) => {
          return <Tile name={pokemon.name} />
        }) }
      </div>
    );
  }
}

export default App;
