import React, { Component } from 'react';
import './App.css';
import Tile from './Tile';
import { Input, Menu, Icon } from 'antd';
import pokemonMetadata from 'pokemon-metadata';
const Search = Input.Search;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchTerm: "",
      sortBy: 0,
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

  handleClick = (e) => {
    this.setState({sortBy: e.key});
  }

  matchesSearch = (pokemon) => {
    return pokemon.name.includes(this.state.searchTerm)
  }

  compare = (p1, p2) => {
    var pokemon1 = pokemonMetadata[p1.name];
    var pokemon2 = pokemonMetadata[p2.name];
    return pokemon2.stats[this.state.sortBy].base_stat - pokemon1.stats[this.state.sortBy].base_stat;
  }

  renderTile = (pokemon, index) => {
    console.log(pokemonMetadata[pokemon.name]);
    return <Tile key={index} name={pokemon.name} meta={pokemonMetadata[pokemon.name]} />
  }

  render() {
    return (
      <div style={{display:'flex', flexDirection: 'row'}}>
        <Menu onClick={this.handleClick} theme='dark' style={{ width: 240 }} mode="vertical">
          <Menu.Item key="search">
            <Search
              placeholder="input search text"
              style={{ width: 200 }}
              onSearch={value => this.setState({searchTerm: value})}
              onChange={e =>{
                this.setState({searchTerm: e.target.value})}
              }
            />
          </Menu.Item>
          <Menu.Item key="0">
            <div>
              <Icon type="double-right" />
              Speed
            </div>
          </Menu.Item>
          <Menu.Item key="1">
            <div>
              <Icon type="star-o" />
              Special Defense
            </div>
          </Menu.Item>
          <Menu.Item key="2">
            <div>
              <Icon type="star" />
              Special Attack
            </div>
          </Menu.Item>
          <Menu.Item key="3">
            <div>
              <Icon type="safety" />
              Defense
            </div>
          </Menu.Item>
          <Menu.Item key="4">
            <div>
              <Icon type="rocket" />
              Attack
            </div>
          </Menu.Item>
          <Menu.Item key="5">
            <div>
              <Icon type="heart-o" />
              Hit Points
            </div>
          </Menu.Item>
        </Menu>
        <div style={{display:'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
          {
            this.state.pokemon
              .filter(this.matchesSearch)
              .sort(this.compare)
              .map(this.renderTile)
          }
        </div>
      </div>
    );
  }
}

export default App;
