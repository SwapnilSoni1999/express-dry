const dry = require('drytypes')
const Types = require('../types')

module.exports = (schema) => {
    const drySchema = {}
    const customTypes = Object.keys(Types)
    for (const key in schema) {
        const { type, required } = schema[key]
        drySchema[key] = dry[type.name]
        if (customTypes.includes(type.tag)) {
            drySchema[key] = Types[type.tag]
        }
        if (!required) {
            drySchema[key].union(dry.Undefined)
        }
    }
    return drySchema
}
