import React, { Component  } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ImageComponent from '../ImageComponent/ImageComponent';

class ImagePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      image: [],
      imageLoaded: false
    }
  }

  componentDidMount(){
    this.showImage();
  }

  showImage = (src) => {
    const id = +this.props.match.params.id;
    const images = this.props.images;
    let image = [];
    images.map((item) => item.id === id ? image = item : '');
    this.setState({
      image
    })
  }

  render(){
    return (
      <div>
        <ImageComponent image={this.state.image} />
      </div>
    )
  }
}

export default connect(
  state => ({
    images: state.images.data
  })
)(ImagePage);
