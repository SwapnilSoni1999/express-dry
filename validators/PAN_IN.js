const dry = require('drytypes')

module.exports = dry.makeDryType((x) => {
    if (typeof x !== 'string') {
        return { success: false, message: 'Invalid PAN Number' }
    }
    let panRegex = "[A-Z]{5}[0-9]{4}[A-Z]{1}";
    if (!x.match(panRegex)) {
        return { success: false, message: 'Invalid PAN Number!' }
    }
  
    return { success: true,message: "Valid PAN number" }
    
}, 'PAN')