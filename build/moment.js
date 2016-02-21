"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _momentRange = require("moment-range");

var _momentRange2 = _interopRequireDefault(_momentRange);

require("moment-timezone");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_momentRange2.default.prototype.contains = function contains(other, exclusive) {
	var start = this.start;
	var end = this.end;

	if (other instanceof _momentRange2.default) {
		return (start < other.start || start.isSame(other.start) && !exclusive) && (end > other.end || end.isSame(other.end) && !exclusive);
	} else {
		return (start < other || start.isSame(other) && !exclusive) && (end > other || end.isSame(other) && !exclusive);
	}
};

exports.default = _moment2.default;