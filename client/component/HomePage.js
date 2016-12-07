import React, { Component } from 'react';
import Grid from './Grid.js';
import Select from 'react-select';
import Header from './Header';

class HomePage extends Component {
  componentWillMount() {
    this.props.fetchTypes();
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

window.addEventListener('popstate', function(event) {
  // The popstate event is fired each time when the current history entry changes.

  var r = confirm("You pressed a Back button! Are you sure?!");

  if (r == true) {
      // Call Back button programmatically as per user confirmation.
      history.back();
      // Uncomment below line to redirect to the previous page instead.
      // window.location = document.referrer // Note: IE11 is not supporting this.
  } else {
      // Stay on the current page.
      history.pushState(null, null, window.location.pathname);
  }

  history.pushState(null, null, window.location.pathname);

}, false);

export default HomePage;
