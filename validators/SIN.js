const dry = require('drytypes')

module.exports = dry.makeDryType((x) => {
    if (typeof x !== 'string') {
        return { success: false, message: 'Social Insurance Number should be string!' }
    }

    let sinRegex = ^(\d{3}-\d{3}-\d{3})|(\d{9})$;
    if (!x.match(sinRegex)) {
        return { success: false, message: 'Invalid SIN!, Please Recheck the SIN!' }
    }

    return { success: true, message:'You Have Entered Valid Social Insuarance Number!' }

}, 'SIN')