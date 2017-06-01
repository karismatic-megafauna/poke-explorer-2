import React, { Component } from 'react';
import './App.css';
import list from './generation1.json';
import Tile from './Tile';
import { Input } from 'antd';
const Search = Input.Search;

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchTerm: "",
    }
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
          { list.pokemon_species.filter(this.matchesSearch).map(this.renderTile) }
        </div>
      </div>
    );
  }
}

export default App;
