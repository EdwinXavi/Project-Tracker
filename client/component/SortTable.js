import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class SortTable extends Component {
  render() {
    const { project, i } = this.props;
    return (
        <tr>
          <th>{i+1}</th>
          <th>{project.ProjectName}</th>
          <th>{project.status}</th>
          <th>{project.pid}</th>
          <th>{project.location}</th>
          <th>{new Date(project.startDate).toUTCString().split(' ').slice(1,4).join(' ')}</th>
        </tr>
    )
  }
}

export default SortTable;
