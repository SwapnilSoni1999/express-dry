const dry = require('drytypes');

module.exports = dry.makeDryType((x) => {
	if (typeof x !== 'string') {
		return {
			success: false,
			message: 'Driving License number should be a string!',
		};
	}

	let INDrivingLCRegex =
		/^(([A-Z]{2}[0-9]{2})( )|([A-Z]{2}-[0-9]{2}))((19|20)[0-9][0-9])[0-9]{7}$/g;
	if (!x.match(INDrivingLCRegex)) {
		return {
			success: false,
			message: 'Invalid Driving License Number',
		};
	}
	return { success: true };
}, 'DRIVING_LC_IN');
