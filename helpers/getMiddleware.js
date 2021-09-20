module.exports = (validator, entity, statusCode) => {
    return (req, res, next) => {
        const params = req[entity]
        const result = validator.validate(params)
        if (!result.success) {
            return res.status(statusCode).json(result)
        }
        return next()
    }
}