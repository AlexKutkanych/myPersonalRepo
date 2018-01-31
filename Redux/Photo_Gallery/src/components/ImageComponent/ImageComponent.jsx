import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import '../../App.css';

class ImageComponent extends Component {


  render(){
        const { webformatURL, tags, comments, likes, views } = this.props.image;
        console.log(this.props.image);
    return (
        <div className="image-block">
          <img src={webformatURL} alt={tags} />
          <span>{comments} comments</span>
          <Link to='/log in'><p>Log in to leave comments</p></Link>
          {String(tags).split(', ').map((item, i) => <p key={i}>{item}</p>)}
          <span className="image-counter image-counter_likes">{likes}</span>
          <span className="image-counter image-counter_views">{views}</span>
        </div>
    )
  }
}

export default ImageComponent;

ImageComponent.propTypes = {
  previewURL: PropTypes.string,
  tags: PropTypes.string
};
