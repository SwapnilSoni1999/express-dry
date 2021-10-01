const dry = require('drytypes')

module.exports = dry.makeDryType((x) => {
    if (typeof x !== 'string') {
        return { success: false, message: 'Voter ID number must be a Alphanumeric String!' }
    }
    
   
    if (x.length < 10) {
        return { success: false, message: 'VoterID number must be a 10 digit number!')
    }

    const VOTER_ID_REGEX = /^([a-zA-Z]){3}([0-9]){7}?$/;

    if (!x.match(VOTER_ID_REGEX)) {
        return { success: false, message: 'Invalid VoterID number!' }
    }

    return { success: true }

}, 'VoterID_IN')
