import React from 'react';
import PropTypes from 'prop-types';
import metadata from 'pokemon-metadata';
import { Card } from 'antd';

class Tile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      spriteDir: 'front',
      spriteStyle: 'default',
    }
  }

  changeSpriteDir= (e) => {
    if(this.state.spriteDir=== 'front') {
      this.setState({ spriteDir: 'back'});
    } else {
      this.setState({ spriteDir: 'front'});
    }
  }

  changeSpriteStyle = (e) => {
    e.stopPropagation();
    if(this.state.spriteStyle=== 'default') {
      this.setState({ spriteStyle: 'shiny'});
    } else {
      this.setState({ spriteStyle: 'default'});
    }
  }

  render() {
    const { name } = this.props;
    const spriteString = `${this.state.spriteDir}_${this.state.spriteStyle}`;
    const src = metadata[name].sprites[spriteString];

    return(
      <Card
        title={name}
        extra={<span>{metadata[name].id}</span>}
        style={{ width: 300, margin:'10px' }}
        bodyStyle={{display:'flex', justifyContent:'center'}}
        onClick={this.changeSpriteDir}
      >
        <img
          onClick={this.changeSpriteStyle}
          src={src}
          alt={name}
        />
      </Card>
    );
  }
}

Tile.propTypes = {
  name: PropTypes.string,
}

Tile.defaultProps = {
  name: "Mew",
}

export default Tile;
