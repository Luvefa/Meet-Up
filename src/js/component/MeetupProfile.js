import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import rigo from "../../img/rigo-baby.jpg";

export function MeetupProfile() {
	const { store, actions } = useContext(Context);
	// let params = useParams();
	// let history = useHistory();

	// let event = actions.getClass(params.id);
	// let event = actions.getClass(student.classID);
	// console.log(Classes);

	let events = courses.roster.map(id => {
		return actions.getEvent(id);
	});
	console.log(events);

	let content = " course no found";
	return (
		<div className="container-fluid">
			<div className="jumbotron jumbotron-fluid" style={{ backgroundColor: "#ecb110" }}>
				<div className="d-flex justify-content-center">
					<img src={rigo} className="rounded float-left" alt="..." />
					<div className="card border-dark mb-3" style={{ maxwidth: "18rem" }}>
						<div className="card-header">Meetup 1{classes.name}</div>
						<div className="card-body text-dark">
							<h5 className="card-title">Location</h5>
							<p className="card-text">Miami, FL</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
