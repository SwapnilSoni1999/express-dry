const dry = require('drytypes')

module.exports = dry.makeDryType((x) => {
    if (typeof x !== 'string') {
        return { success: false, message: 'Social Security Number should be string!' }
    }

    let ssnRegex = /^(?!666|000|9\\d{2})\\d{3}-(?!00)\\d{2}-(?!0{4})\\d{4}$/;
    if (!x.match(ssnRegex)) {
        return { success: false, message: 'Invalid SSN!, Please Recheck the SSN!' }
    }

    return { success: true, message:'You Have Entered Valid Social Security Number!' }

}, 'SSN')