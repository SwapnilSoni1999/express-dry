const dry = require('drytypes')

module.exports = dry.makeDryType((x) => {
    if (typeof x !== 'string') {
        return { success: false, message: 'Invalid Driving License' }
    }
    let drivinRegex = "^(([A-Z]{2}[0-9]{2})"
    + "( )|([A-Z]{2}-[0-9]"
    + "{2}))((19|20)[0-9]"
    + "[0-9])[0-9]{7}$";
    if (!x.match(drivinRegex)) {
        return { success: false, message: 'Invalid Driving License!' }
    }
  
    return { success: true , message: "Valid Driving License!"}
  
}, 'DrivingLicense')