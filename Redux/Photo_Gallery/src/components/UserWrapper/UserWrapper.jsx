import React, { Component } from 'react';
import UserBtn from '../UserBtn/UserBtn';
import '../../App.css';

class UserWrapper extends Component {

  render(){

    return (
      <div className="user-wrapper">
        <UserBtn label='log in'/>
        <UserBtn label='sign up'/>
      </div>
    )
  }
}

export default UserWrapper;
