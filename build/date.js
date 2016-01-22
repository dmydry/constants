"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timeFormat = exports.dateFormat = exports.googleFormat = exports.ISO_8601 = exports.daysRunning = exports.untilDate = exports.endDate = exports.startDate = exports.testDate = exports.date = exports.timeZone = undefined;

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _momentTimezone = require("moment-timezone");

var _momentTimezone2 = _interopRequireDefault(_momentTimezone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-line no-unused-vars

var timeZone = exports.timeZone = "Europe/Zurich";
var date = exports.date = new Date();
var testDate = exports.testDate = (0, _moment2.default)(date).tz(timeZone).startOf("hour").toDate();
var startDate = exports.startDate = (0, _moment2.default)(testDate).add(0, "h").toDate();
var endDate = exports.endDate = (0, _moment2.default)(testDate).add(1, "h").toDate();
var untilDate = exports.untilDate = (0, _moment2.default)(testDate).add(14, "d").add(0, "h").toDate();

var daysRunning = exports.daysRunning = [0, 1, 2, 3, 4, 5, 6];

var ISO_8601 = exports.ISO_8601 = "YYYY-MM-DD\\THH:mm:ss\\Z";
var googleFormat = exports.googleFormat = "YYYYMMDD\\THHmmss\\Z";
var dateFormat = exports.dateFormat = "MMM-DD-YYYY";
var timeFormat = exports.timeFormat = "h:mm a";