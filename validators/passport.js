const dry = require('drytypes')

module.exports = dry.makeDryType((x) => {
    if (typeof x !== 'string') {
        return {
            success: false,
            message: 'Passport number should be string!' 
        }
    }

    let panRegex = /^(?!^0+$)[a-zA-Z0-9]{6,9}$/;
    if (!x.match(panRegex)) {
        return {
            success: false,
            message: 'Invalid PAN Card number!, Recheck the number please!!' 
        }
    }

    return {
        success: true,
        message: "You Have Entered Valid Passport Number!!"
    }
}, 'passport')
