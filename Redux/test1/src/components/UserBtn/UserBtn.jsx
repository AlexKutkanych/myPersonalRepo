import React, { Component, Fragment } from 'react';
import '../../App.css';

class UserBtn extends Component {

  render(){
    const { label } = this.props;
    return (
      <Fragment>
          <button className="button">{label}</button>
      </Fragment>
    )
  }
}

export default UserBtn;
