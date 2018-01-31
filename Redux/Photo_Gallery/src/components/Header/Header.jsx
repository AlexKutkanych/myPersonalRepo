import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import UserWrapper from '../UserWrapper/UserWrapper';
import '../../App.css';

class Header extends Component {
  render(){

    return (
      <header className="App-header">
        <h1 className="App-title"><Link to='/content'>Photo album</Link></h1>
        <UserWrapper />
      </header>
    )
  }
}

export default Header;
