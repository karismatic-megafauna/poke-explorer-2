import React from 'react';
import PropTypes from 'prop-types';
import metadata from 'pokemon-metadata';
import { Card, Progress } from 'antd';
import { map } from './helpers';

class Tile extends React.Component {
  capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  prettify = (words) => {
    return words.split('-').map(this.capitalize).join(' ');
  }

  render() {
    const { name } = this.props;
    const spriteString = 'front_default';
    const src = metadata[name].sprites[spriteString];

    return(
      <Card
        title={this.capitalize(name)}
        extra={metadata[name].id}
        style={{ width: 400, margin:'10px' }}
        bodyStyle={{display:'flex', justifyContent:'center'}}
      >
        <div style={{ display: 'flex', width: '100%' }}>
          <img
            src={src}
            alt={name}
            style={{width: '50%', alignSelf: 'center'}}
          />
          <div style={{width: '50%'}}>
            { metadata[name].stats.map((stat) => {

              const relativeStats = map(stat.base_stat, 0, 250, 0, 100);
              return (
                <div
                  key={stat.stat.name}
                  style={{
                    marginTop: '5px',
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%'
                  }}
                >
                  <span>
                    {`${this.prettify(stat.stat.name)}: ${stat.base_stat}`}
                  </span>
                  <Progress percent={relativeStats} showInfo={false} />
                </div>
              )
            })}
          </div>
        </div>
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
