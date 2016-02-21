import moment from "moment";
import DateRange from "moment-range";
import "moment-timezone";

DateRange.prototype.contains = function contains(other, exclusive) {
	const start = this.start;
	const end = this.end;

	if (other instanceof DateRange) {
		return (start < other.start || (start.isSame(other.start) && !exclusive)) && (end > other.end || (end.isSame(other.end) && !exclusive));
	} else {
		return (start < other || (start.isSame(other) && !exclusive)) && (end > other || (end.isSame(other) && !exclusive));
	}
};

export default moment;