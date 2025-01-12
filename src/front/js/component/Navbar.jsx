import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	// Code JS
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">HOME</span>
				</Link>
				<div className="ml-auto">
					<Link to="/contactlist">
						<button className="btn btn-primary">Contact</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
