const dry = require('drytypes')
const Types = require('../types')
const optional = require('../utils/optional')

module.exports = (schema) => {
    const drySchema = {}
    const customTypes = Object.keys(Types)
    for (const key in schema) {
        const { type, required, min, max } = schema[key]
        drySchema[key] = dry[type.name]
        if (customTypes.includes(type.tag)) {
            drySchema[key] = Types[type.tag]
        }
        if(min) {
            drySchema[key] = drySchema[key].intersect(dry.NumberGreaterThan(min))
        }
        if(max) {
            drySchema[key] = drySchema[key].intersect(dry.NumberLesserThan(max))
        }
        if (required === false) {
            drySchema[key] = optional(drySchema[key])
        }
    }
    return drySchema
}
