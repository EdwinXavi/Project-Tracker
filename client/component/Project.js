import React, { Component } from 'react';
import Header from './Header';

class Project extends Component{
  render() {
    return (
      <div>
        <div className='headers'>
          <Header header='Project Management'></Header>
        </div>
        <div>
          {React.cloneElement(this.props.children, this.props)}
        </div>
      </div>
    )
  }
}

export default Project;
