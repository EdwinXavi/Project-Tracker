import React, { Component } from 'react';
import Header from './Header';
import SortTable from './SortTable';
import {BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class ForecastPage extends Component {
  constructor() {
    super();
  }
  componentWillMount() {
    this.props.fetchProjects();
  }
  render() {
    if(this.props.projects[0]) {
      const projects = this.props.projects[0].projects;
      return (
        <div>
          <div className='headers'>
            <Header header='Project Forecast' />
          </div>
          <br /><br />
          <div className="container">
            <h2>Project List</h2>
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Project Name</th>
                    <th>Status</th>
                    <th>PID</th>
                    <th>Location</th>
                    <th>Start Date</th>
                  </tr>
                </thead>
                <tbody>
                    {projects.map((project,i) => <SortTable {...this.props} key={i} project={project} i={i} /> )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )
    }
    else {
      return null;
    }
  }
}

export default ForecastPage;
