import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

const Body = ({ list, renderTile }) => (
  <div className="Body">
    { list.map(renderTile) }
  </div>
)

Body.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string),
  renderTile: PropTypes.func.isRequired,
}

Body.defaultProps = {
  list: [],
}

export default Body;
