const dry = require('drytypes')

module.exports = (dryType, number) =>
{
	let newDryType = dry.makeDryType((x) => {
		if (typeof x == 'string') {
			if (x.toString().length > number) return { success: true }
			else {
				return {
					success: false,
					message: `expected string length lesser than: ${number}}`,
				}
			}
		} else if (Array.isArray(x)) {
			if (x.length > number) return { success: true }
			else {
				return {
					success: false,
					message: `expected array length lesser than: ${number}}`,
				}
			}
		} else return { success: false }
	})
    return dryType.intersect(newDryType)
}

