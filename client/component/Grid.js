import React, { Component } from 'react';
import { Link } from 'react-router';

class Grid extends Component {
  render() {
    const { type, i} = this.props;
    return (
      <Link to={`${type.name}`}>
        <div className='col-md-4 grid'>
          <div><p className="task-heading">{type.name}</p></div>
        </div>
      </Link>
    )
  }
}

export default Grid;
