import React, { Component } from 'react';
import './App.css';
import list from './generation1.json';
import { Card } from 'antd';
import { getSprite } from 'pokemon-images';

function Tile({ name }) {
  return(
    <Card title={name} style={{ width: 300 }}>
      <img src={getSprite(name)} alt={name}/>
    </Card>
  );
}

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
