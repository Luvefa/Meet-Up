import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<Link className="nav-link" to="/">
			<h1>
				<i className="fab fa-maxcdn" />
				eetup
			</h1>
		</Link>
	</footer>
);
