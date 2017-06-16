import React, { Component } from 'react';
import './App.css';
import Tile from './Tile';
import { Input, Menu, Icon } from 'antd';
import pokemonMetadata from 'pokemon-metadata';

class Show extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const {
      match: {
        params: {
          pokemon_name: name
        }
      }
    } = this.props;
    const meta = pokemonMetadata[name]
    return (
      <img src={meta.sprites.front_default} alt={name} style={{ width: '50%' }}/>
    )
  }
}

export default Show;
