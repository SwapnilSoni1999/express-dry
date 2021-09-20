const dry = require('drytypes')

module.exports = (drySchema, allowExtraKeys) => {
    return (allowExtraKeys ? dry.Record : dry.ExactRecord)(drySchema)
}
