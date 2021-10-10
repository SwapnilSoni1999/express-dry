const dry = require('drytypes')
const Types = require('../types')
const optional = require('../utils/optional')
const minLengthDry = require('../utils/minLength')
const maxLengthDry = require('../utils/maxLength')

const buildDrySchema = (schema) => {
    const drySchema = {}
    const customTypes = Object.keys(Types)
    for (const key in schema) {
        const { type, required, min, max, minLength, maxLength } = schema[key]

        if (schema[key].type === undefined && typeof schema[key] === "object") {
            if (!Array.isArray(schema[key])) {
                drySchema[key] = buildDrySchema(schema[key]);
            } else {
                drySchema[key] = [buildDrySchema(schema[key][0])];
            }
            continue;
        }

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
        if(minLength) {
            drySchema[key] = minLengthDry(drySchema[key], minLength)
        }
        if(maxLength) {
            drySchema[key] = maxLengthDry(drySchema[key], maxLength)
        }
        if (required === false) {
            drySchema[key] = optional(drySchema[key])
        }
    }
    return drySchema
}

module.exports = buildDrySchema