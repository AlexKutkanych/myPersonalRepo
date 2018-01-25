import React, { Component } from 'react';
import SortByImageType from '../SortByImageType/SortByImageType';
import SearchBlock from '../SearchBlock/SearchBlock';
import '../../App.css';

class FilterWrapper extends Component {

  render(){
    const { getPhotos, setFilter, filter } = this.props;
    return (
      <div className="filter-wrapper">
        <SortByImageType
          getPhotos={getPhotos}
          setFilter={setFilter}
          filter={filter}
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
