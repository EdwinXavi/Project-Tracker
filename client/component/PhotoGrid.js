import React, { Component } from 'react';
import Grid from './Grid.js';
import Select from 'react-select';

class PhotoGrid extends Component {
  componentWillMount() {
    this.props.fetchProjects();
  }
  render() {
    const projectList = this.props.projects[0].projects.projects;
    return (
      <div className='container photo-grid'>
        {projectList.map((project, i) =>
          <Grid {...this.props} key={i} project={project} i={i} />
        )}
      </div>
    )
  }
}

export default PhotoGrid;
