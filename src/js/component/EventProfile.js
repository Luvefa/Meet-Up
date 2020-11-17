import React from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";

import { Link } from "react-router-dom";

export function EventProfile() {
	// let params = useParams();
	// let history = useHistory();
	let event = useLocation().event;
	console.log(event);

	return (
		<div className="container-fluid">
			<div className="jumbotron jumbotron-fluid" style={{ backgroundColor: "#ecb110" }}>
				<div className="card-group">
					<div className="box">
						<div className="card-text">{event.date}</div>
						<h2>{event.name}</h2>
						<Link className="card-text" to="/meetup/">
							{event.lastname}
						</Link>
					</div>

					<div className="box2" style={{ maxwidth: "18rem" }}>
						<div className="card-body">
							<h5 className="card-title">People going</h5>
							<a href="#" className="btn btn-primary">
								Login to RSVP
							</a>
							<div className="card-text">
								<i className="fab fa-twitter-square fa-2x" />

								<i className="fab fa-facebook-square fa-2x" />
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* topper
    botton */}
			<div className="card-columns">
				<div className="card">
					<img src="https://loremflickr.com/320/240?random=3" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Details</h5>
						<p className="card-text">
							This is a longer card with supporting text below as a natural lead-in to additional content.
						</p>
						<p>This content is a little bit longer:</p>
						<li>list</li>
						<li>list</li>
						<li>list</li>
						<li>list</li>
					</div>
				</div>

				<div className="card border-dark mb-3" style={{ maxwidth: "18rem" }}>
					<blockquote className="blockquote mb-0 card-body">
						<i className="far fa-clock" /> <br />
						{event.date}
						,2020
						<p>
							{event.time}
							<br />
							Every Monday and Friday
						</p>
						<footer className="blockquote-footer">
							<small className="text-muted">
								Someone famous in <cite title="Source Title">Source Title</cite>
							</small>
						</footer>
					</blockquote>
				</div>
			</div>
		</div>
	);
}
