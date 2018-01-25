import React, { Component } from 'react';
import SortByContentType from '../SortByContentType/SortByContentType';
import SearchBlock from '../SearchBlock/SearchBlock';
import '../../App.css';

class FilterWrapper extends Component {

  render(){
    const { getPhotos, getVideos, setFilter, filter, label } = this.props;
    return (
      <div className="filter-wrapper">
        <SortByContentType
          title='Sort images'
          getContent={getPhotos}
          setFilter={setFilter}
          filter={filter}
          label={label[0].photos}
           />
         <SortByContentType
           title='Sort videos'
           getContent={getVideos}
           setFilter={setFilter}
           filter={filter}
           label={label[1].videos}
          />
         <SearchBlock
           getPhotos={getPhotos}
           filter={filter}
           />
      </div>
    )
  }
}

export default FilterWrapper;
