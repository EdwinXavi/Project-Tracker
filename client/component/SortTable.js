import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class SortTable extends Component {
  render() {
    const { project, i } = this.props;
    return (
        <tr>
          <td>{i+1}</td>
          <td>{project.ProjectName}</td>
          <td>{project.status}</td>
          <td>{project.pid}</td>
          <td>{project.location}</td>
          <td>{new Date(project.startDate).toUTCString().split(' ').slice(1,4).join(' ')}</td>
        </tr>
    )
  }
}

export default SortTable;
