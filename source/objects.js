"use strict";

import moment from "moment";
import {getRandomString} from "./utils/utils.js";
import {title, aapTypes, chargeNames, description, notes, password, confirm} from "./misc.js";
import {testDate, startDate, endDate, timeZone} from "./date.js";
import {phoneNumber} from "./twilio.js";
import {cardNumbers} from "./stripe.js";

export const AAPObject = [{
	name: aapTypes.adult
}, {
	name: aapTypes.youth
}, {
	name: aapTypes.child
}];

export function cardObject(data) {
	return Object.assign({
		number: cardNumbers[5],
		exp_month: 12, // eslint-disable-line camelcase
		exp_year: 2016, // eslint-disable-line camelcase
		cvc: "123"
	}, data);
}

export function locationObject(data) {
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

export function activityObject(data) {
	return Object.assign({
		description,
		title,
		timeZone,
		whatToBring: ["whatToBring 1", "whatToBring 2"],
		requirements: ["requirements 1", "requirements 2"],
		whatIncluded: ["whatIncluded 2", "whatIncluded 2"],
		location: locationObject()
	}, data);
}

export function bookingObject(data) {
	return Object.assign({
		bookingId: "Booking ID",
		notes,
		created: testDate,
		answers: [{
			questionText: "question 1?",
			answerText: "answer 1!"
		}, {
			questionText: "question 2?",
			answerText: "answer 2!"
		}]
	}, data);
}

export function customerObject(data) {
	return Object.assign({
		fullName: "Full Customer Name",
		email: getRandomString().toLowerCase() + "@gmail.com",
		phoneNumber,
		location: locationObject()
	}, data);
}

export function guideObject(data) {
	return Object.assign({
		fullName: "Full Guide Name",
		email: getRandomString().toLowerCase() + "@gmail.com",
		phoneNumber
	}, data);
}

export function eventObject(data) {
	return Object.assign({
		title,
		timeZone,
		startTime: startDate,
		endTime: endDate,
		originalStartTime: moment(startDate).add(-1, "d").toDate(),
		originalEndTime: moment(endDate).add(-1, "d").toDate()
	}, data);
}

export function userObject(data) {
	return Object.assign({
		password,
		confirm,
		fullName: "Full Operator Name",
		companyName: "Company name",
		domainName: "domain.com",
		phoneNumber,
		email: getRandomString().toLowerCase() + "@gmail.com",
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

export function transactionObject(data) {
	return Object.assign({
		charges: [{
			name: aapTypes.adult,
			type: "aap",
			count: 1,
			amount: 100
		}, {
			name: aapTypes.child,
			type: "aap",
			count: 1,
			amount: 70
		}, {
			name: chargeNames.addon,
			type: "addon",
			count: 1,
			amount: 10
		}, {
			name: "Cola",
			type: "addon",
			count: 1,
			amount: 10
		}, {
			name: chargeNames.tax,
			type: "tax",
			count: 1,
			amount: 10
		}, {
			name: chargeNames.fee,
			type: "fee",
			count: 1,
			amount: 10
		}]
	}, data);
}
