import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../App.css';

class ImageContainer extends Component {
  render(){
      const { previewURL, tags, likes, views } = this.props;

    return (
        <div className="image-container">
          <img src={previewURL} width="300px" alt={tags} />
          <div className="image-overlay">
            <span className="image-counter image-counter_likes">{likes}</span>
            <span className="image-counter image-counter_views">{views}</span>
          </div>
        </div>
    )
  }
}

export default ImageContainer;

ImageContainer.propTypes = {
  previewURL: PropTypes.string,
  tags: PropTypes.string
};
