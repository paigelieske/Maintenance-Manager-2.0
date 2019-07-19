import React from "react";
import './Nav.css';

const NavBar = () => (
	<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
		<a href="index.html">
			<div className="loading"></div>
			<p className="navbar-brand">Task Manager</p>
		</a>
		<button
			className="navbar-toggler"
			data-toggle="collapse"
			ata-target="#navbarNav"
			aria-controls="navbarNav"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span className="navbar-toggler-icon" />
		</button>
		<div id="navbarNav" className="collapse navbar-collapse">
			<ul className="navbar-nav">
				<li id="nav-item-index" className="nav-item" />
			</ul>
		</div>
	</nav>
);

export default NavBar;