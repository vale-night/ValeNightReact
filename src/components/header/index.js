import React from 'react';
import logo from '../../assets/logo.svg';

export default () => {
  return (
    <header id="header" className="">
      <i className="fas fa-arrow-left"></i>
      <img src={logo} alt="Logo" /> 
      <i className="fas fa-shopping-cart"></i>
    </header>

  )
}