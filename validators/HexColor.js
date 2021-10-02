const dry = require('drytypes')

module.exports = dry.makeDryType((x) => {
    try {
        const hexRegex = /^#([A-Fa-f0-9]{8}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/

        if (typeof x !== 'string') throw new Error('Color code must be a string');

        if (!x.startsWith('#')) throw new Error('Color code must starts with #');

        if (!(x.length === 4 || x.length === 7 || x.length === 9)) throw new Error('Color code length should be 3, 6 or 8 characters');

        if (!x.match(hexRegex)) throw new Error('Invalid color code');

        return { success: true }
    } catch (err) {
        return { success: false, message: err.message }
    }
}, 'HexColor')

