const buildDrySchema = require('./helpers/buildDrySchema')
const getValidator = require('./helpers/getValidator')
const getMiddleware = require('./helpers/getMiddleware')
const Types = require('./types')

module.exports = {
    body: (schema, options={ allowExtraKeys: false, statusCode: 400 }) => {
        const drySchema = buildDrySchema(schema)
        const validator = getValidator(drySchema, options.allowExtraKeys)
        return getMiddleware(validator, 'body', options.statusCode)
    },
    params: (schema, options={ allowExtraKeys: true, statusCode: 400 }) => {
        const drySchema = buildDrySchema(schema)
        const validator = getValidator(drySchema, options.allowExtraKeys)
        return getMiddleware(validator, 'params', options.statusCode)
    },
    query: (schema, options={ allowExtraKeys: true, statusCode: 400 }) => {
        const drySchema = buildDrySchema(schema)
        const validator = getValidator(drySchema, options.allowExtraKeys)
        return getMiddleware(validator, 'query', options.statusCode)
    },
    Types
}
