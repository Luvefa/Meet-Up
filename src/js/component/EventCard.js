import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export function EventCard(props) {
	const { store, actions } = useContext(Context);
	let classes = actions.getClasses();

	console.log(props.event);
	console.log(classes);

	return (
		<div className="container">
			<div className="d-flex justify-content-center">
				<div className="card border-dark mb-3" style={{ maxwidth: "18rem" }}>
					<div className="card-header">{props.event.date}</div>
					<div className="card-body text-dark">
						<h5 className="card-title">{props.event.time}</h5>
						<p className="card-text">{props.event.name}</p>

						<Link className="card-text" to="/meetup/">
							{store.classes[props.event.classID - 1].name}
						</Link>
						<br />
						<Link
							className="btn btn-info"
							to={{
								pathname: "/profile/" + props.index.id,
								event: props.event
							}}>
							View Event
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

EventCard.propTypes = {
	index: PropTypes.number,

	event: PropTypes.object
};
