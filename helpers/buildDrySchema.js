const dry = require('drytypes')

module.exports = (schema) => {
    const drySchema = {}
    for (const key in schema) {
        const { type, optional } = schema[key]
        drySchema[key] = dry[type.name]
        if (optional) {
            drySchema[key].union(dry.Undefined)
        }
    }
    return drySchema
}
