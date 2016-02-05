"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.AAPObject = undefined;
exports.activityObject = activityObject;
exports.bookingObject = bookingObject;
exports.cardObject = cardObject;
exports.customerObject = customerObject;
exports.chargeTimeslotArray = chargeTimeslotArray;
exports.chargeActivityArray = chargeActivityArray;
exports.eventObject = eventObject;
exports.guideObject = guideObject;
exports.locationObject = locationObject;
exports.operatorObject = operatorObject;
exports.timeslotObject = timeslotObject;
exports.userObject = userObject;
exports.transactionObject = transactionObject;

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _utils = require("./utils/utils.js");

var _misc = require("./misc.js");

var _date = require("./date.js");

var _twilio = require("./twilio.js");

var _stripe = require("./stripe.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AAPObject = exports.AAPObject = [{
	name: _misc.chargeNames.aap.adult
}, {
	name: _misc.chargeNames.aap.youth
}, {
	name: _misc.chargeNames.aap.child
}];

function activityObject(data) {
	return Object.assign({
		description: _misc.description,
		title: _misc.title,
		timeZone: _date.timeZone,
		whatToBring: ["whatToBring 1", "whatToBring 2"],
		requirements: ["requirements 1", "requirements 2"],
		whatIncluded: ["whatIncluded 2", "whatIncluded 2"],
		location: locationObject(),
		charges: chargeActivityArray()
	}, data);
}

function bookingObject(data) {
	return Object.assign({
		bookingId: (0, _utils.getRandomString)(8, 2),
		notes: _misc.notes,
		created: _date.testDate,
		transaction: transactionObject(),
		answers: [{
			questionText: "question 1?",
			answerText: "answer 1!"
		}, {
			questionText: "question 2?",
			answerText: "answer 2!"
		}]
	}, data);
}

function cardObject(data) {
	return Object.assign({
		number: _stripe.cardNumbers[5],
		exp_month: 12, // eslint-disable-line camelcase
		exp_year: 2016, // eslint-disable-line camelcase
		cvc: "123"
	}, data);
}

function customerObject(data) {
	return Object.assign({
		fullName: "Full Customer Name",
		email: (0, _utils.getRandomString)().toLowerCase() + "@gmail.com",
		phoneNumber: _twilio.phoneNumber,
		location: locationObject()
	}, data);
}

function chargeTimeslotArray(data) {
	return Object.assign({
		charges: [{
			name: _misc.chargeNames.aap.adult,
			type: "aap",
			amount: _misc.chargeValues.aap.adult
		}, {
			name: _misc.chargeNames.aap.youth,
			type: "aap",
			amount: _misc.chargeValues.aap.youth
		}, {
			name: _misc.chargeNames.aap.child,
			type: "aap",
			amount: _misc.chargeValues.aap.child
		}]
	}, data);
}

function chargeActivityArray(data) {
	return Object.assign({
		charges: [{
			name: _misc.chargeNames.addon.food,
			type: "addon",
			amount: _misc.chargeValues.addon.food
		}, {
			name: _misc.chargeNames.addon.drink,
			type: "addon",
			amount: _misc.chargeValues.addon.drink
		}, {
			name: _misc.chargeNames.tax,
			type: "tax",
			amount: _misc.chargeValues.tax
		}, {
			name: _misc.chargeNames.fee,
			type: "fee",
			amount: _misc.chargeValues.fee
		}]
	}, data);
}

function eventObject(data) {
	return Object.assign({
		title: _misc.title,
		timeZone: _date.timeZone,
		startTime: _date.startDate,
		endTime: _date.endDate,
		originalStartTime: (0, _moment2.default)(_date.startDate).add(-1, "d").toDate(),
		originalEndTime: (0, _moment2.default)(_date.endDate).add(-1, "d").toDate()
	}, data);
}

function guideObject(data) {
	return Object.assign({
		fullName: "Full Guide Name",
		email: (0, _utils.getRandomString)().toLowerCase() + "@gmail.com",
		phoneNumber: _twilio.phoneNumber
	}, data);
}

function locationObject(data) {
	return Object.assign({
		streetAddress: "very long street 123",
		tag: "tag",
		city: "city",
		state: "state",
		country: "country",
		zipCode: "00000",
		location: {
			type: "Point",
			coordinates: [Math.random(), Math.random()]
		}
	}, data);
}

function operatorObject(data) {
	return Object.assign({
		password: _misc.password,
		confirm: _misc.confirm,
		fullName: "Full Operator Name",
		companyName: "Company name",
		domainName: "domain.com",
		phoneNumber: _twilio.phoneNumber,
		email: (0, _utils.getRandomString)().toLowerCase() + "@gmail.com",
		location: locationObject(),
		role: "operator",
		preferences: {
			features: {
				guides: true,
				questions: true
			},
			customFields: {
				notes: "Notes",
				prior: 30
			}
		}
	}, data);
}

function timeslotObject(data) {
	return Object.assign({
		title: _misc.title,
		timeZone: _date.timeZone,
		startTime: _date.startDate,
		endTime: _date.endDate,
		untilTime: _date.untilDate,
		charges: chargeTimeslotArray()
	}, data);
}

function userObject(data) {
	return Object.assign({
		password: _misc.password,
		confirm: _misc.confirm,
		fullName: "Full Operator Name",
		companyName: "Company name",
		domainName: "domain.com",
		phoneNumber: _twilio.phoneNumber,
		email: (0, _utils.getRandomString)().toLowerCase() + "@gmail.com",
		location: locationObject(),
		role: "operator",
		preferences: {
			features: {
				guides: true,
				questions: true
			},
			customFields: {
				notes: "Notes",
				prior: 30
			}
		}
	}, data);
}

function transactionObject(data) {
	return Object.assign({
		charges: [{
			name: _misc.chargeNames.aap.adult,
			type: "aap",
			amount: _misc.chargeValues.aap.adult
		}, {
			name: _misc.chargeNames.aap.child,
			type: "aap",
			amount: _misc.chargeValues.aap.child
		}, {
			name: _misc.chargeNames.addon.food,
			type: "addon",
			amount: _misc.chargeValues.addon.food
		}, {
			name: _misc.chargeNames.addon.drink,
			type: "addon",
			amount: _misc.chargeValues.addon.drink
		}, {
			name: _misc.chargeNames.tax,
			type: "tax",
			amount: _misc.chargeValues.tax
		}, {
			name: _misc.chargeNames.fee,
			type: "fee",
			amount: _misc.chargeValues.fee
		}]
	}, data);
}