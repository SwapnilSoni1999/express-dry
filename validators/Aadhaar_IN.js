const dry = require('drytypes')

module.exports = dry.makeDryType((x) => {
    
    if (typeof x !== 'string' ||typeof x !=='number' ) {
        return { success: false, message: 'Invalid Aadhaar Number' }
    }
    if(x.length!==12){
        return { success: false, message: 'Not a 12 Digit Number' }

    }
    let aadharRegex = '(^\\d{12}$)|(^\\d{4}-\\d{4}-\\d{4}$)|(^\\d{4} \\d{4} \\d{4}$)';
    if (!x.match(aadharRegex)) {
        return { success: false, message: 'Invalid Aadhaar Number!' }
    }
  
    return { success: true , message: 'Valid Aadhaar Number' }
  
}, 'AADHAR')