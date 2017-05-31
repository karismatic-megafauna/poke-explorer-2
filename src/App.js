import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import list from './generation1.json';
import { Card } from 'antd';

function printName(element) {
  return(
    <Card title={element.name} style={{ width: 300 }}>
      <p>{element.name}</p>
    </Card>
  );
}

class App extends Component {
  render() {
    return (
      <div>
        {list.pokemon_species.map(printName)}
      </div>
    );
  }
}

export default App;
