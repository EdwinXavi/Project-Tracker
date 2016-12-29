import React, { Component } from 'react';
import Grid from './Grid.js';
import Select from 'react-select';
import Header from './Header';

class HomePage extends Component {
  componentWillMount() {
    this.props.fetchTypes();
  }
  handleSubmit() {
    const name = this.refs.name.value;
  }
  render() {
    if(this.props.types[0]) {
      const typeList = this.props.types[0].types;
      return (
        <div>
          <div className='headers'>
            <Header header='Project Tracker' />
          </div>
          <div>
            {React.cloneElement(this.props.children, this.props)}
          </div>
        </div>
      )
    }
    else {
      return null;
    }
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
