"use strict";

import moment from "moment";
import tz from "moment-timezone"; // eslint-disable-line no-unused-vars
import crypto from "crypto";
import {googleFormat} from "../date.js";


export function getEventInstanceId(eventId, time) {
	return eventId + "_" + moment.tz(time, "UTC").format(googleFormat);
}

export function getEventId(eventInstanceId) {
	return eventInstanceId.split("_")[0];
}

export function getEventDate(eventInstanceId) {
	return moment.tz(eventInstanceId.split("_")[1], googleFormat, "UTC").toDate();
}

export function getRandomString(length = 64, type = 3) {
	const chars = [
		"0123456789",
		"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
		"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
		"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
	];
	const randomBytes = crypto.randomBytes(length);
	const result = new Array(length);
	let cursor = 0;
	for (let i = 0; i < length; i++) {
		cursor += randomBytes[i];
		result[i] = chars[type][cursor % chars[type].length];
	}
	return result.join("");
}
