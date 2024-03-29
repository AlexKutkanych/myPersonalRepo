import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import VideoComponent from '../VideoComponent/VideoComponent';
import ImageContainer from '../ImageContainer/ImageContainer';
import '../../App.css';

class ContentGrid extends Component {

  render(){
    const { contentType } = this.props;
    return (
      <Masonry
                className={'content-block'}
                elementType={'ul'}
                disableImagesLoaded={false}
                updateOnEachImageLoad={false}
            >
            {contentType === 'images' ?
             this.props.images.map(({ previewURL, id, tags, likes, views }) => {
               return <Link to={`/content/${id}`} key={id}><ImageContainer key={id}
                               previewURL={previewURL}
                               tags={tags}
                               likes={likes}
                               views={views} /></Link>
             }) :
             this.props.videos.map(({ videos, id }) => <VideoComponent key={id} source={videos.large.url} />)}
            </Masonry>

    )
  }
}

export default ContentGrid;

ContentGrid.propTypes = {
  contentType: PropTypes.string
};
