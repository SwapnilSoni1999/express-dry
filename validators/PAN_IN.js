const dry = require('drytypes')

module.exports = dry.makeDryType((x) => {
    if (typeof x !== 'string') {
        return { success: false, message: 'Invalid PAN number!' }
    }

    let panRegex = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
    if (!x.match(panRegex)) {
        return { success: false, message: 'Invalid Pan number, Recheck PAN ID number please!' }
    }
  
    return { success: true }
  
}, 'PAN_IN')
