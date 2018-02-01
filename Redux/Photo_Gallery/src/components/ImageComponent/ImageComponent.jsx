import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import '../../App.css';

class ImageComponent extends Component {


  render(){
    const { webformatURL, tags, comments, likes, views, webformatWidth, webformatHeight, userImageURL, user_id, user } = this.props.image;
    return (
        <div className="image-block clearfix">
          <img src={webformatURL} className="image-block__image" width={webformatWidth} height={webformatHeight} alt={tags} />
          <div className="image-block__data">
            <div className="user-block">
              <img className="user-block__image" src={userImageURL} alt={user_id} />
              <p className="user-block__data">{user}</p>
            </div>
            <a href={webformatURL} target="_blank" className="button download-button" download>Download Free</a>
          </div>
          <span className="image-block__comment-count">{comments}&nbsp;comments</span>
          <Link to='/log in'><span className="image-block__login-btn">Log in to leave comments</span></Link>
          <div className="image-block__tags-block">
              {String(tags).split(', ').map((item, i) => <a className="tag-item" href="#" key={i}>{item}</a>)}
          </div>
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
