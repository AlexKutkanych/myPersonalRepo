import React, { Component } from 'react';
import '../../App.css';

class SortByImageType extends Component {

  searchPhoto = () => {
    this.props.getPhotos(this.props.filter.filter);
  }

  render(){
    return (
      <div className="search-block">
        <input id="test" className="search-input"/>
        <button className="search-button" onClick={this.searchPhoto}>Search</button>
      </div>
    )
  }
}

export default SortByImageType;
