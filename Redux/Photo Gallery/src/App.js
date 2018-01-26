import React, { Component } from 'react';
import { connect } from 'react-redux';

import ContentGrid from './components/ContentGrid/ContentGrid';
import Footer from './components/Footer/Footer';
import UserWrapper from './components/UserWrapper/UserWrapper';
import FilterWrapper from './components/FilterWrapper/FilterWrapper';
import Loading from './components/Loading/Loading';

import { getImages } from './actions/ImagesActions';
import { getVideos } from './actions/VideosActions';
import './App.css';

class App extends Component {
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
      this.props.getImages('all', 100);
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

  render() {
    const { images, videos, isLoading, filter, getImages, getVideos, setFilter } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Photo album</h1>
          <UserWrapper />
        </header>
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
        <Footer />
      </div>
    );
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
    getVideos: (filter) => {
      const request = document.querySelector('#test').value;
      dispatch(getVideos(filter, request))
    },
    setFilter: (filter) => {
      dispatch({type: 'SET_FILTER', filter})
    }
  })
)(App);
