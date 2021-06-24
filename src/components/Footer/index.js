import React from 'react';
import {
  Link
} from "react-router-dom";
import './style.css';

export default () => {
  return (
	<footer>
		<div className="item-footer active" id="home">
		<Link to="/">
			<i className="fas fa-home"></i>
			Home
		</Link>
		</div>

		<div className="item-footer" id="search">
			<Link to="filtro">
				<i className="fas fa-search"></i>
				Filtro
			</Link>
		</div>

		<div className="item-footer" id="cart">
			<Link to="/carrinho">
				<i className="fas fa-shopping-cart"></i>
				Carrinho
			</Link>
		</div>

		<div className="item-footer" id="profile">
			<Link to="/perfil">
				<i className="fas fa-user"></i>
				Perfil
			</Link>
		</div>

		<div className="item-footer" id="more">
			<Link to="#">
				<i className="fas fa-plus"></i>
				Mais
			</Link>
		</div>

	</footer>
  );
}