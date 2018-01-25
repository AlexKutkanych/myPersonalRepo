import React, { Component } from 'react';
import '../../App.css';

class Footer extends Component {

  render(){
    return (
      <footer className="footer">
        <h4 className="footer__info">Powered by <a href="https://pixabay.com/">Pixabay</a></h4>
        <h4 className="footer__info">2018 &copy; Made by <a href="https://github.com/AlexKutkanych">Alex</a></h4>
      </footer>
    )
  }
}

export default Footer;
