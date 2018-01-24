import React, { Component, Fragment } from 'react';
import '../../App.css';

class Page extends Component {

  render(){
    const { year, photos } = this.props;
    return (
      <Fragment>
      {photos.map((item, i) => <img src={item.previewURL} key={i}/>)}
      </Fragment>
    )
  }
}

export default Page;
