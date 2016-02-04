"use strict";


export const title = "My activity Title";
export const description = new Array(40).join("long ") + "description";
export const notes = new Array(40).join("long ") + "notes";
export const password = "My5up3r5tr0ngP@55w0rd";
export const confirm = password;
export const XABLAccessKey = "PRIVATE KEY";

export const attendees = 2;
export const minOcc = 1;
export const maxOcc = 10;

export const chargeNames = {
	tax: "VAT",
	fee: "FLEE",
	addon: {
		food: "Hamburger",
		drink: "Coka-Cola"
	},
	aap: {
		adult: "Adult",
		youth: "Youth",
		child: "Child"
	}
};

export const chargeValues = {
	tax: 10 * 100,
	fee: 10 * 100,
	addon: {
		food: 10 * 100,
		drink: 5 * 100
	},
	aap: {
		adult: 300 * 100,
		youth: 200 * 100,
		child: 100 * 100
	}
};
