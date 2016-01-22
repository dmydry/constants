"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getEventInstanceId = getEventInstanceId;
exports.getEventId = getEventId;
exports.getEventDate = getEventDate;
exports.getRandomString = getRandomString;

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _momentTimezone = require("moment-timezone");

var _momentTimezone2 = _interopRequireDefault(_momentTimezone);

var _crypto = require("crypto");

var _crypto2 = _interopRequireDefault(_crypto);

var _date = require("../date.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-line no-unused-vars
function getEventInstanceId(eventId, time) {
	return eventId + "_" + _moment2.default.tz(time, "UTC").format(_date.googleFormat);
}

function getEventId(eventInstanceId) {
	return eventInstanceId.split("_")[0];
}

function getEventDate(eventInstanceId) {
	return _moment2.default.tz(eventInstanceId.split("_")[1], _date.googleFormat, "UTC").toDate();
}

function getRandomString() {
	var length = arguments.length <= 0 || arguments[0] === undefined ? 64 : arguments[0];
	var type = arguments.length <= 1 || arguments[1] === undefined ? 3 : arguments[1];

	var chars = ["0123456789", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ", "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"];
	var randomBytes = _crypto2.default.randomBytes(length);
	var result = new Array(length);
	var cursor = 0;
	for (var i = 0; i < length; i++) {
		cursor += randomBytes[i];
		result[i] = chars[type][cursor % chars[type].length];
	}
	return result.join("");
}