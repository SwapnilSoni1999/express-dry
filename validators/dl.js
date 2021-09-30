const dry = require('drytypes')

module.exports = dry.makeDryType((x) => {
    if (typeof x !== 'string') {
        return { success: false, message: 'Driving Licence number should be string!' }
    }

    let dlRegex = /^(([A-Z]{2}[0-9]{2})( )|([A-Z]{2}-[0-9]{2}))((19|20)[0-9][0-9])[0-9]{7}$”/;
    if (!x.match(dlRegex)) {
        return { success: false, message: 'Invalid Driving Licence number!, Please Recheck the DL number!' }
    }

    return { success: true, message:'You Have Entered Valid DL Number!' }

}, 'DL_NO')
