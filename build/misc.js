"use strict";

var _attendeesObj;

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
	addon: "Snack"
};

var aapTypes = exports.aapTypes = {
	adult: "Adult",
	youth: "Youth",
	child: "Child"
};

var aapPrices = exports.aapPrices = {
	adult: 200,
	youth: 100,
	child: 50
};
var attendeesObj = exports.attendeesObj = (_attendeesObj = {}, _defineProperty(_attendeesObj, aapTypes.adult, 1), _defineProperty(_attendeesObj, aapTypes.youth, 1), _defineProperty(_attendeesObj, aapTypes.child, 1), _attendeesObj);