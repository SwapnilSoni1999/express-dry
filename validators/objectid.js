const dry = require('drytypes')

module.exports = dry.makeDryType((x) => {
    if (typeof x !== 'string') {
        return { success: false, message: 'Invalid ObjectId!' }
    }
    const result = new Date(parseInt(x.substring(0, 8), 16) * 1000)
    if (result === 'Invalid Date') {
        return { success: false, message: 'Invalid ObjectId!' }
    }
    return { success: true }
}, 'ObjectId')
