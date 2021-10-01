const dry = require('drytypes')
module.exports = (dryType) => dryType.union(dry.Undefined)