import React, { Component } from 'react';
import Grid from './Grid';

class TypeList extends Component {
  render() {
    const typeList = this.props.types[0].types;
    return (
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
    )
  }
}

export default TypeList;
