"use strict";

import moment from "moment";
import tz from "moment-timezone"; // eslint-disable-line no-unused-vars

export const timeZone = "Europe/Zurich";
export const date = new Date();
export const testDate = moment(date).tz(timeZone).startOf("hour").toDate();
export const startDate = moment(testDate).add(0, "h").toDate();
export const endDate = moment(testDate).add(1, "h").toDate();
export const untilDate = moment(testDate).add(14, "d").add(0, "h").toDate();

export const daysRunning = [0, 1, 2, 3, 4, 5, 6];

export const ISO_8601 = "YYYY-MM-DD\\THH:mm:ss\\Z";
export const googleFormat = "YYYYMMDD\\THHmmss\\Z";
export const dateFormat = "MMM-DD-YYYY";
export const timeFormat = "h:mm a";
