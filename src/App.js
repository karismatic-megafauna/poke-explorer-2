import React, { Component } from 'react';
import './App.css';
import Tile from './Tile';
import { Input, Menu, Icon } from 'antd';
import pokemonMetadata from 'pokemon-metadata';
const Search = Input.Search;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function handleClick(e) {
  console.log('click', e);
}


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchTerm: "",
      sortBy: "attack",
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

  compare = (t1, t2) => {
    console.log(pokemonMetadata[t1.name]);
    return t1.attack-t2.attack;
  }

  renderTile = (pokemon) => {
    return <Tile name={pokemon.name} meta={pokemonMetadata[pokemon.name]} />
  }

  render() {
    return (
      <div style={{display:'flex', flexDirection: 'row'}}>
        <Menu onClick={handleClick} theme='dark' style={{ width: 240 }} mode="vertical">
          <Menu.Item key="1">
            <Search
            placeholder="input search text"
            style={{ width: 200 }}
            onSearch={value => this.setState({searchTerm: value})}
            onChange={e =>{
              this.setState({searchTerm: e.target.value})}
            }
            />
          </Menu.Item>
          <Menu.Item key="2">
            <div>
              <Icon type="double-right" />
              Speed
            </div>
          </Menu.Item>
          <Menu.Item key="3">
            <div>
              <Icon type="star-o" />
              Special Defense
            </div>
          </Menu.Item>
          <Menu.Item key="4">
            <div>
              <Icon type="star" />
              Special Attack
            </div>
          </Menu.Item>
          <Menu.Item key="5">
            <div>
              <Icon type="safety" />
              Defense
            </div>
          </Menu.Item>
          <Menu.Item key="6">
            <div>
              <Icon type="rocket" />
              Attack
            </div>
          </Menu.Item>
          <Menu.Item key="7">
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
