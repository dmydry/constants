"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eventInstanceId = exports.calendarId = exports.eventId = undefined;

var _utils = require("./utils/utils.js");

var _date = require("./date.js");

var eventId = exports.eventId = "eventId";
var calendarId = exports.calendarId = "primary_calendar";
var eventInstanceId = exports.eventInstanceId = (0, _utils.getEventInstanceId)(eventId, _date.startDate);