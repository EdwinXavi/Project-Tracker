import React, { Component } from 'react';

class SortTable extends Component {
  render() {
    const { project, i } = this.props;
    return (
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>{i+1}</th>
                <th>{project.ProjectName}</th>
                <th>{project.pid}</th>
                <th>{project.location}</th>
                <th>{project.status}</th>
                <th>{new Date(project.startDate).toUTCString().split(' ').slice(1,4).join(' ')}</th>
              </tr>
            </thead>
          </table>
        </div>
    )
  }
}

export default SortTable;
