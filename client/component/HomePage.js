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
          <div className='container type-grid'>
            {typeList.map((type, i) => <Grid {...this.props} key={i} type={type} i={i} /> )}

            <div className="col-md-4 grid1 glyphicon glyphicon-plus-sign" data-toggle="modal" data-target="#myModal" onClick = {this.setOptions}>
              <p className="task-desc grid1-font-color"><br/> Add New Type</p>
            </div>

            <div className="modal fade modal" id="myModal" role="dialog">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                    <h4 className="modal-title">Create Type</h4>
                  </div>
                  <div className="modal-body">
                    <div className="form-group">
                      <label htmlFor="inputsm">Name</label>
                      <input className="form-control input-sm task-desc" ref="name" id="inputsm" type="text" placeholder="Name..."/>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="submit" className="btn btn-default" data-dismiss="modal" onClick={this.handleSubmit}>Create</button>
                  </div>
                </div>
              </div>
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
