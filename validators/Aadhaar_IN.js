const dry = require('drytypes')

module.exports = dry.makeDryType((x) => {
    if (typeof x !== 'number' || typeof x !== 'string') {
        return { success: false, message: 'Aadhaar number should either be a String or a Number!' }
    }
    
    x = x.toString()
    if (x.length < 12) {
        return { success: false, message: 'Aadhaar number must be a 12 digit number!'}
    }

    const aadharRegex = /^[2-9]{1}[0-9]{3}\s{1}[0-9]{4}\s{1}[0-9]{4}$/;
    if (!x.match(aadharRegex)) {
        return { success: false, message: 'Invalid Aadhaar number!' }
    }

    return { success: true }

}, 'AadhaarNumber')
