import React, { useState } from 'react';
import styled from 'styled-components';
import backToTop from '../../images/back-to-top.svg';

const ArrowButton = styled.img`
  position: fixed; 
  width: 16px;
  height: 20px;
  right: 24%;
  bottom: 320px;
  z-index: 1000;
  cursor: pointer;
`;

const ToTopButton = () =>{

  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 800){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 800){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
      <ArrowButton src={backToTop} onClick={scrollTop} style={{display: showScroll ? 'flex' : 'none'}} />
  );
}
  
export default ToTopButton;