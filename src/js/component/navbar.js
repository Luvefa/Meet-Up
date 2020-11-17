import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Modal, Button } from "react-bootstrap";

export const Navbar = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<nav className="navbar navbar-expand-sm " style={{ backgroundColor: "#ecb110" }}>
			<Link className="nav-link" to="/">
				<h1>
					<i className="fab fa-maxcdn" />
					eetup
				</h1>
			</Link>
			<a className="navbar-brand" href="#" />

			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="collapsibleNavbar">
				<ul className="navbar-nav ml-auto">
					{/*	<li className="nav-item">
						<Link className="nav-link" to="/demo">
							Event List
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/meetup">
							meetuplist
						</Link>
					</li> */}

					<Button variant="primary" onClick={handleShow}>
						Login
					</Button>

					<Modal show={show} onHide={handleClose}>
						<Modal.Header closeButton>
							<Modal.Title>Login</Modal.Title>
						</Modal.Header>

						<input type="text" placeholder="username" />
						<input type="text" placeholder="password" />
						<Modal.Footer>
							<Button variant="primary" onClick={handleClose}>
								Login
							</Button>
						</Modal.Footer>
					</Modal>
				</ul>
			</div>
		</nav>
	);
};
