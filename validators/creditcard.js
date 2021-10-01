const dry = require('drytypes');

module.exports = dry.makeDryType((x) => {
	if (typeof x !== 'string') {
		return {
			success: false,
			message: 'Credit Card number should be a string!',
		};
	}

	let ccPattern = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;
	if (!x.match(ccPattern)) {
		return {
            success: false,
            message:"Entered credit card number is Invalid"
		};
	}
	return {
        success: true,
		message: 'You Have Entered Valid Credit Card Number',
    };
}, 'CC_number');
