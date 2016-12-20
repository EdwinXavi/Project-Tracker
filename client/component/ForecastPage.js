import React, { Component } from 'react';
import Header from './Header';
import SortTable from './SortTable';

class ForecastPage extends Component {
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
          <div>
          <div className="container">
            <h2>Project List</h2>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Project Name</th>
                    <th>PID</th>
                    <th>Location</th>
                    <th>Status</th>
                    <th>Start Date</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
          </div>
          <div>
            {projects.map((project,i) => <SortTable {...this.props} key={i} project={project} i={i} /> )}
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
