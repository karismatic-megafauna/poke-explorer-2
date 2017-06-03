import React from 'react';
import PropTypes from 'prop-types';
import metadata from 'pokemon-metadata';
import { Card } from 'antd';

function Tile({ name }) {
  return(
    <Card
      title={name}
      extra={<span>{metadata[name].id}</span>}
      style={{ width: 300, margin:'10px' }}
      bodyStyle={{display:'flex', justifyContent:'center'}}
    >
      <img src={metadata[name].sprites.front_shiny} alt={name}/>
    </Card>
  );
}

Tile.propTypes = {
  name: PropTypes.string,
}

Tile.defaultProps = {
  name: "Mew",
}

export default Tile;
