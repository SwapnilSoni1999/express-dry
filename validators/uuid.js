const uuid = {
	3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
	4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
	5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
	combined: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
};

module.exports = dry.makeDryType((x, v = 'combined') => {
	if (typeof x === 'string' || x instanceof String) {
		return {
			success: false,
			message: 'Invalid uuid!. uuid should be a string',
		};
	}
	const pattern = uuid[v];
	if (pattern) {
		const isUuid = pattern.test(x);
		if (isUuid) {
			return { success: true };
		} else {
			return {
				success: false,
				message: 'Invalid uuid!',
			};
		}
	}
}, 'uuid');
