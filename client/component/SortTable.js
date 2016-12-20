import React, { Component } from 'react';

class SortTable extends Component {
  render() {
    const { project, i } = this.props;
    return (
      <div className="container">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>{i+1}</th>
                <th>{project.ProjectName}</th>
                <th>{project.pid}</th>
                <th>{project.location}</th>
                <th>{project.status}</th>
                <th>{project.startDate}</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    )
  }
}

export default SortTable;
