import React, { Component } from 'react';

class Header extends Component {
  render() {
    let head;
    if(this.props.params && this.props.params.projectId) {
      head = this.props.params.projectId;
    }
    else {
      head = this.props.header;
    }
    return (
      <div className="header fonts">
        <p className='fonts'>{head}</p>
      </div>
    )
  }
}

export default Header;
