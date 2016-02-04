"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var title = exports.title = "My activity Title";
var description = exports.description = new Array(40).join("long ") + "description";
var notes = exports.notes = new Array(40).join("long ") + "notes";
var password = exports.password = "My5up3r5tr0ngP@55w0rd";
var confirm = exports.confirm = password;
var XABLAccessKey = exports.XABLAccessKey = "PRIVATE KEY";

var attendees = exports.attendees = 2;
var minOcc = exports.minOcc = 1;
var maxOcc = exports.maxOcc = 10;

var chargeNames = exports.chargeNames = {
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

var chargeValues = exports.chargeValues = {
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