import React, { useState, useContext } from "react";
import { Header } from "../component/Header.js";
import { Context } from "../store/appContext";
import { EventCard } from "../component/EventCard.js";

export function EventList() {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<Header />

			<div className="col text-center">
				{store.events.map((event, index) => (
					<EventCard key={index} index={index} event={event} />
				))}
			</div>
		</div>
	);
}
