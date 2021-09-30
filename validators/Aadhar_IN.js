const dry = require('drytypes')

module.exports = dry.makeDryType((x) => {
    if (typeof x !== 'string') {
        return { success: false, message: 'Invalid aadhar number!' }
    }

    let aadharRegex = /^[2-9]{1}[0-9]{3}\s{1}[0-9]{4}\s{1}[0-9]{4}$/;
    if (!x.match(aadharRegex)) {
        return { success: false, message: 'Invalid aadhar number!' }
    }
  
    return { success: true }
  
}, 'aadharNumber')
