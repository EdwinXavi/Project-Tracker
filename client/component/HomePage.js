import React, { Component } from 'react';
import Grid from './Grid.js';
import Select from 'react-select';
import Header from './Header'

class HomePage extends Component {
  componentWillMount() {
    this.props.fetchTypes();
    setTimeout(() => {
     window.history.forward()
   }, 0)
   window.onunload=function(){null};
  }
  render() {
    const typeList = this.props.types[0].types;
    return (
      <div>
        <div className='headers'>
          <Header header='Project Management' />
        </div>
        <div className='container type-grid'>
          {typeList.map((type, i) =>
            <Grid {...this.props} key={i} type={type} i={i} />
          )}
        </div>
      </div>
    )
  }
}

export default HomePage;
