import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

class UserBtn extends Component {

  render(){
    const { label } = this.props;
    return (
      <Fragment>
          <Link to={`/${label}`}><button className="button">{label}</button></Link>
      </Fragment>
    )
  }
}

export default UserBtn;
