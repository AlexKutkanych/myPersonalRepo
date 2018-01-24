import React, { Component, Fragment } from 'react';
import '../App.css';

class UserBtn extends Component {

  render(){
    const { label } = this.props;
    return (
      <Fragment>
          <button className="year-filter">{label}</button>
      </Fragment>
    )
  }
}

export default UserBtn;
