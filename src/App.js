import React, { Component } from 'react';
import './App.css';
import Tile from './Tile';
import { Input, Layout, Menu, Icon } from 'antd';
import metadata from 'pokemon-metadata';
const { Header, Sider, Content } = Layout;
const Search = Input.Search;
const SubMenu = Menu.SubMenu;

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchTerm: "",
      pokemon: [],
      collapsed: false,
      mode: 'inline',
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

  sortById = (a, b) => {
    return metadata[a.name].id - metadata[b.name].id
  }

  matchesSearch = (pokemon) => {
    return pokemon.name.includes(this.state.searchTerm)
  }

  renderTile = (pokemon) => {
    return <Tile name={pokemon.name} />
  }

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({
      collapsed,
      mode: collapsed ? 'vertical' : 'inline',
    });
  }

  render() {
    return (
      <Layout className="App">
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          style={{ overflow: 'auto' }}
        >
          <div className="SearchBar">
            <Search
              placeholder="input search text"
              onSearch={value => this.setState({searchTerm: value})}
              onChange={e =>{
                this.setState({searchTerm: e.target.value})}
              }
            />
          </div>
          <Menu
            theme="dark"
            mode={this.state.mode}
          >
            <Menu.Item key="6">
              <span>
                <Icon type="file" />
                <span className="nav-text">File</span>
              </span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{overflow: 'initial'}}>
            <div className="Body">
              {
                this.state.pokemon
                  .filter(this.matchesSearch)
                  .sort(this.sortById)
                  .map(this.renderTile)
              }
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
