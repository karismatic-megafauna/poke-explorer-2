import React from 'react';
import { getSprite } from 'pokemon-images';
import { Card } from 'antd';
import pokemonMetadata from 'pokemon-metadata';
import { Progress } from 'antd';

function capitalize(statName) {
  statName.split('-').map((s) => {

  })
}

function Tile({ name }) {
  const {stats} = pokemonMetadata[name]
  const statBars = stats.map((stat) =>
    <div>
      <span>{`${stat.stat.name}: ${stat.base_stat}`}</span>
      <Progress percent={stat.base_stat/500*100} strokeWidth={5} showInfo={false}/>
    </div>
  )

  // debugger
  return(
    <Card title={name} style={{ width: 500, margin:'10px' }} bodyStyle={{display:'flex', justifyContent:'center'}}>
      <div style={{ width: '100%', display: 'flex' }}>
        <img src={getSprite(name)} alt={name} style={{ width: '50%' }}/>
        <div style={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
          {statBars}
        </div>
      </div>
    </Card>
  );
}

Tile.propTypes = {
  name: React.PropTypes.string,
}

Tile.defaultProps = {
  name: "Mew",
}

export default Tile;
