import React from 'react';
import { getSprite } from 'pokemon-images';
import { Card } from 'antd';
import { Progress } from 'antd';

function capitalize(statName) {
  statName = statName.toLowerCase().replace(/\b[a-z]/g, function(letter) {
    return letter.toUpperCase();
  });

  statName = statName.replace(/-/g, ' ');

  return statName;
}

function Tile({ name, meta }) {
  const {stats, id} = meta
  const statBars = stats.map((stat, index) =>
    <div key={index}>
      <span>{`${capitalize(stat.stat.name)}: ${stat.base_stat}`}</span>
      <Progress percent={stat.base_stat/500*100} strokeWidth={5} showInfo={false}/>
    </div>
  )

  return(
    <Card title={capitalize(name)} extra={id} style={{ width: 500, margin:'10px' }} bodyStyle={{display:'flex', justifyContent:'center'}}>
      <div style={{ width: '100%', display: 'flex' }}>
        <img src={meta.sprites.front_default} alt={name} style={{ width: '50%' }}/>
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
