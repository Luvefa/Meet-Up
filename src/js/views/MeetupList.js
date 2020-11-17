import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { MeetupCard } from "../component/MeetupCard.js";

export function MeetupList() {
	const { store, actions } = useContext(Context);
	let test = "";

	if (store.classes.length == 0) {
		test = "Nothing to show";
	} else {
		test = (
			<div className="col text-center">
				{store.classes.map((classes, index) => (
					<MeetupCard key={index} index={index} classes={classes} />
				))}
			</div>
		);
	}

	return <div className="col text-center">{test}</div>;
}
