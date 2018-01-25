import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import '../../App.css';

class PhotoGrid extends Component {
  render(){
      const { photos } = this.props;
      var childElements = photos.map((item, i) => <img width="300px" src={item.previewURL} key={i} alt={item.tags}/>);
    return (
      <Masonry
                className={'my-gallery-class'}
                elementType={'ul'}
                disableImagesLoaded={false}
                updateOnEachImageLoad={false}
            >
                {childElements}
            </Masonry>

    )
  }
}

export default PhotoGrid;
