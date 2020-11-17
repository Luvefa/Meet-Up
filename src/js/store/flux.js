const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			events: [
				{
					id: 1,
					date: "Oct 25",
					time: "7pm",
					name: "5th Event for Meetup1 ",
					lastname: "Meetup 1",
					classID: 1
				},
				{
					id: 2,
					date: "Oct 26",
					time: "5pm",
					name: "4th Event for Meetup 1",
					lastname: "Meetup 1",
					classID: 1
				},
				{
					id: 3,
					date: "Oct 30",
					time: "4pm",
					name: "2nd Event for Meetup 1",
					lastname: "Meetup 2",
					classID: 2
				},
				{
					id: 4,
					date: "Nov 1",
					time: "10:00am",
					name: "1st Event for Meetup 1",
					lastname: "Meetup 1",
					classID: 1
				},
				{
					id: 5,
					date: "Nov 4",
					time: "4pm",
					name: "2nd Event for Meetup 2",
					lastname: "Meetup 2",
					classID: 2
				}
			],
			classes: [
				{
					id: 1,
					name: "Meetup 1",
					desc: "Miami, FL",
					roster: [1, 2]
				},
				{
					id: 2,
					name: "Meetup 2",
					desc: "Fort Lauderdale, FL",
					roster: [3]
				}
			]
		},
		actions: {
			getEvents: () => {
				return getStore().events;
			},
			getEvent: id => {
				const events = getStore().events;
				id = parseInt(id);
				let event = {};

				events.forEach(element => {
					if (id === element.id) {
						event = element;
					}
				});
				return event;
			},
			getClasses: () => {
				return getStore().classes;
			},
			getClass: id => {
				const classes = getStore().classes;
				id = parseInt(id);
				let Class = {};

				classes.forEach(element => {
					if (id === element.id) {
						Class = element;
					}
				});
				return Class;
			}
		}
	};
};

export default getState;
