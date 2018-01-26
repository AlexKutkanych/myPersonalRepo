import React, { Component } from 'react';
import FilterByContentType from '../FilterByContentType/FilterByContentType';
import SearchBlock from '../SearchBlock/SearchBlock';
import '../../App.css';

class FilterWrapper extends Component {

  render(){
    const { getImages, getVideos, setFilter, filter, label, selectContent } = this.props;

    return (
      <div className="filter-wrapper">
        <FilterByContentType
          title='Filter images'
          getContent={getImages}
          setFilter={setFilter}
          filter={filter}
          label={label[0].images}
          selectContent={selectContent}
           />
         <FilterByContentType
           title='Filter videos'
           getContent={getVideos}
           setFilter={setFilter}
           filter={filter}
           label={label[1].videos}
           selectContent={selectContent}
          />
         <SearchBlock
           getVideos={getVideos}
           getImages={getImages}
           filter={filter}
           />
      </div>
    )
  }
}

export default FilterWrapper;
