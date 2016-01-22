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
	addon: "Snack"
};

export const aapTypes = {
	adult: "Adult",
	youth: "Youth",
	child: "Child"
};

export const aapPrices = {
	adult: 200,
	youth: 100,
	child: 50
};
export const attendeesObj = {
	[aapTypes.adult]: 1,
	[aapTypes.youth]: 1,
	[aapTypes.child]: 1
};
