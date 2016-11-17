import React, { Component } from 'react';
import { Link } from 'react-router';

class Grid extends Component {
  render() {
    const { project, i} = this.props;
    return (
      <Link to={`/${project.clientName}`}>
        <div className='col-md-4 grid'>
          <div><p className="task-heading">{project.clientName}</p></div>
          <div><p className="task-desc">{project.status}</p></div>
          <div><p className="task-desc">{project.location}</p></div>
          <div><p className="task-desc">{project.probability}</p></div>
          <div><p className="task-desc"><b>Staffing: {project.staffing}</b></p></div>
        </div>
      </Link>

    )
  }
}

export default Grid;
