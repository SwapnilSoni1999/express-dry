const dry = require('drytypes')

module.exports = dry.makeDryType((x) => {

  if (typeof x !== 'string') {
    return { success: false, message: 'Phone number should be string!' }
}
// const phoneRegex = /^(\+?91|0)?[6789]\d{9}$/;
const phoneRegex = /(((^[\+,0][9][1])(((\s[0-9]{7,10})|(\S[0-9]{7,10}))|([-]\S[0-9]{7,10})))|((^[\+,0][2]{2,2})((\S[0-9]{7,8})|((([-])[0-9]{7,8})|(\s[0-9]{7,8})))))|(((^[6,7,8,9][0-9]{9,9}))|(^[0,\+](([9][1)|[6,7,8,9]))[0-9]{8,9}))/gm;

    if (!x.match(phoneRegex)) {
        return { success: false, message: 'Invalid Phone number!' }
    }

    return { success: true }

}, 'Phone_IN')
