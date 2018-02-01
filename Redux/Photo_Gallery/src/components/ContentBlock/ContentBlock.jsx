import React, { Component } from 'react';
import { connect } from 'react-redux';

import ContentGrid from '../ContentGrid/ContentGrid';
import FilterWrapper from '../FilterWrapper/FilterWrapper';
import Loading from '../Loading/Loading';

import { getImages } from '../../actions/ImagesActions';
import { getVideos } from '../../actions/VideosActions';

import '../../App.css';

class ContentBlock extends Component {
  constructor(props){
    super(props);
    this.state = {
      content: 'images',
      isLoading: false,
      label: [
        {images: ['all', 'vector', 'photos']},
        {videos: ['films', 'animation']}
      ]
    }
  }

  componentDidMount(){
    this.props.getImages('all', 40);
  }

  selectContent = (currentFilter) => {
    if(currentFilter === 'images'){
      this.setState({
        ...this.state,
        content: 'images'
      });
    } else {
      this.setState({
        ...this.state,
        content: 'videos'
      });
    }
  }

  render(){

    const { getImages, getVideos, setFilter, filter, images, videos, isLoading } = this.props;

    return (
      <div>
        <FilterWrapper
         getImages={getImages}
         getVideos={getVideos}
         setFilter={setFilter}
         filter={filter}
         label={this.state.label}
         selectContent={this.selectContent} />
       {isLoading ? <Loading /> :
        <ContentGrid images={images}
                     videos={videos}
                     contentType={this.state.content}/>}
      </div>
    )
  }
}

export default connect(
  state => ({
    user: state.user,
    images: state.images.data,
    videos: state.videos.data,
    filter: state.filter,
    isLoading: state.images.isLoading
  }),
  dispatch => ({
    getImages: (filter, perPage) => {
      const request = document.querySelector('#test').value;
      dispatch(getImages(filter, request, perPage))
    },
    getVideos: (filter, perPage) => {
      const request = document.querySelector('#test').value;
      dispatch(getVideos(filter, request, perPage))
    },
    setFilter: (filter) => {
      dispatch({type: 'SET_FILTER', filter})
    }
  })
)(ContentBlock);
