const getMiddleware = (validator, entity, statusCode) => {
    return (req, res, next) => {
        const params = req[entity]
        const result = validator.validate(params)
        if (!result.success) {
            return res.status(statusCode).json(result)
        }
        return next()
    }
}

class ERROR extends Error {
    constructor(code, result) {
        super("");
        this.code = code;
        this.result = result;
    }
}

const fineRes = (expected, got, nest) =>({success: false, message: `expected: ${expected}, got: ${got}, in: ${nest}`});
const getIn = (nest, key) => (`${nest}${nest === "" ? "" : "."}${key}`);

const getBodyMiddleware = (drySchema, source, options) => {
    return (req, res, next) => {
        req.dry = drySchema
        try {
            const validator = (params, validators, nest = "") => {
                // Checking for extra keys
                if (!options.allowExtraKeys) {
                    for (const key in params) {
                        if (validators[key] === undefined) {
                            throw new ERROR(options.statusCode, {success: false, message: `unexpected key found (${key}), in: ${nest}`});
                        }
                    }
                }
                    
                for (const key in validators) {
                    if (validators[key].validate === undefined) {
                        const isVArray = Array.isArray(validators[key]);
                        const isPArray = Array.isArray(params[key]);
                        const currTarget = `${nest}${nest === "" ? "" : "."}${key}`;

                        if (typeof params[key] !== "object" || isPArray !== isVArray) {
                            throw new ERROR(options.statusCode, fineRes(isVArray ? "array": "object", isPArray ? "array" : typeof params[key], currTarget));
                        }

                        if (isVArray) {
                            for(const nKey in params[key]) {
                                validator(params[key][nKey], validators[key][0], getIn(nest, key));
                            }
                        } else {
                            validator(params[key], validators[key], getIn(nest, key));
                        }
                        
                        continue;
                    }
                    
                    const result = validators[key].validate(params[key]);
                    if (!result.success) {
                        throw new ERROR(options.statusCode, {...result, message: result.message + `, in: ${nest === "" ? key : getIn(nest, key)}`});
                    }
                }
            }

            validator(req[source], drySchema);
        } catch (err) {
            return res.status(err.code || 400).json(err.result || {message: err.message});
        }

        return next();
    }
}

module.exports = {getBodyMiddleware, getMiddleware}