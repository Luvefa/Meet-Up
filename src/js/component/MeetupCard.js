import React, { useContext } from "react";
import PropTypes from "prop-types";
import rigo from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export function MeetupCard(props) {
	const { store, actions } = useContext(Context);
	let classes = actions.getClasses();

	return (
		<div className="container-fluid">
			<div className="jumbotron jumbotron-fluid" style={{ backgroundColor: "#ecb110" }}>
				<div className="d-flex justify-content-center">
					<img src={rigo} className="rounded float-left" alt="..." />
					<div className="card border-dark mb-3" style={{ maxwidth: "18rem" }}>
						<div className="card-header">{props.classes.name}</div>

						<div className="card-body text-dark">
							<h5 className="card-title">{props.classes.desc}</h5>

							{/* <Link
								className="btn btn-info"
								to={{
									pathname: "/meetup/:id" + props.classes.id,
									classes: props.classes
								}}>
								View meetup
							</Link> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

MeetupCard.propTypes = {
	index: PropTypes.number,

	classes: PropTypes.object
};
