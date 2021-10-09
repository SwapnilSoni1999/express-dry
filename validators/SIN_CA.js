const dry = require('drytypes')

module.exports = dry.makeDryType((x) => {
    if (typeof x !== 'string') {
        return { success: false, message: 'Social Insuarance Number should be string!' }
    }

    const sinRegex = /^(\d{3}-\d{3}-\d{3})|(\d{9})$/;
    if (!x.match(sinRegex)) {
        return { success: false, message: 'Invalid SIN number!, Please check your SIN number.' }
    }
  
    return { success: true, message:'SIN number is VALID!'}
  
}, 'SIN_CA')
