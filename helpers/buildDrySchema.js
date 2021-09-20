const dry = require('drytypes')

module.exports = (schema) => {
    const drySchema = {}
    for (const key in schema) {
        const { type, required } = schema[key]
        drySchema[key] = dry[type.name]
        if (required) {
            drySchema[key].union(dry.Undefined)
        }
    }
    return drySchema
}
