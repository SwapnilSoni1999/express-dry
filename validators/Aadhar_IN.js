const dry = require('drytypes')

module.exports = dry.makeDryType((x) => {
    if (typeof x !== 'string') {
        return { success: false, message: 'Invalid Aadhar Number' }
    }
    let aadharRegex = '(^\\d{12}$)|(^\\d{4}-\\d{4}-\\d{4}$)|(^\\d{4} \\d{4} \\d{4}$)';
    if (!x.match(aadharRegex)) {
        return { success: false, message: 'Invalid Aadhar Number!' }
    }
  
    return { success: true }
  
}, 'AADHAR')