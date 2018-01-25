import React, { Component } from 'react';
import '../../App.css';

class SortByImageType extends Component {

  searchContent = () => {
    const request = document.querySelector('#test').value;
    const currentFilter = document.querySelector(".button_active").getAttribute('datacontenttype');
    let search;
    if(currentFilter === 'images'){
      search = this.props.getImages;
    } else {
      search = this.props.getVideos;
    }

    search(this.props.filter.filter);
  }

  render(){
    return (
      <div className="search-block">
        <input id="test" className="search-input"/>
        <button className="search-button" onClick={this.searchContent}>Search</button>
      </div>
    )
  }
}

export default SortByImageType;
