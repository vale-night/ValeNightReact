import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

export default () => {
  const history = useHistory();
  return (
    <header id="header" className="">
      <i className="fas fa-arrow-left" onClick={() => history.goBack()}></i>
      <img src={logo} alt="Logo" /> 
      <Link to="/carrinho">
        <i className="fas fa-shopping-cart"></i>
      </Link>
    </header>

  )
}