const dry = require('drytypes')

module.exports = dry.makeDryType((x) => {
    if (typeof x !== 'string') {
        return {
            success: false,
            message: 'Passport number should be string!' 
        }
    }

    let passportRegex = /^(?!^0+$)[a-zA-Z0-9]{6,9}$/;
    if (!x.match(passportRegex)) {
        return {
            success: false,
            message: 'Invalid Passport number!, Recheck the number please!!' 
        }
    }

    return {
        success: true,
        message: "You Have Entered Valid Passport Number!!"
    }
}, 'passport')
