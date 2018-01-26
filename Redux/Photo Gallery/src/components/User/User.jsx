import React, { Component, Fragment } from 'react';
import '../../App.css';

class User extends Component {

  render(){
    const { name } = this.props;
    return (
      <Fragment>
        <h2>Hello, {name}</h2>
      </Fragment>
    )
  }
}

export default User;
