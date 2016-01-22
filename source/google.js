"use strict";

import {getEventInstanceId} from "./utils/utils.js";
import {startDate} from "./date.js";

export const eventId = "eventId";
export const calendarId = "primary_calendar";
export const eventInstanceId = getEventInstanceId(eventId, startDate);
