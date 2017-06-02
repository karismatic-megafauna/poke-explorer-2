import React, { Component } from 'react';
import './App.css';
import Tile from './Tile';
import { Input } from 'antd';
const Search = Input.Search;

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchTerm: "",
      pokemon: [],
    }
  }

  componentWillMount() {
    fetch(`https://pokeapi.co/api/v2/generation/1/`)
      .then((response) => {
        response.json()
          .then((data) => {
            this.setState({pokemon: data.pokemon_species})
          })
      })
  }

  matchesSearch = (pokemon) => {
    return pokemon.name.includes(this.state.searchTerm)
  }

  renderTile = (pokemon) => {
    return <Tile name={pokemon.name} />
  }

  render() {
    return (
      <div>
        <Search
          placeholder="input search text"
          style={{ width: 200 }}
          onSearch={value => this.setState({searchTerm: value})}
          onChange={e =>{
            this.setState({searchTerm: e.target.value})}
          }
        />
        <div style={{display:'flex',flexWrap: 'wrap', justifyContent: 'center'}}>
          {
            this.state.pokemon
              .filter(this.matchesSearch)
              .map(this.renderTile)
          }
        </div>
      </div>
    );
  }
}

export default App;
