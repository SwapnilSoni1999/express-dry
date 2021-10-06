const dry = require('../index')

const routeConfigs = [
    {
        path: '/aadhar',
        middleware: dry.body({
            data: { type: dry.Types.AadhaarNumber, required: true }
        }),
        payload: {
            invalid: {
                data: '999941057058'
            }
        }
    },
    {
        path: '/email',
        middleware: dry.body({
            data: { type: dry.Types.EmailAddress }
        }),
        payload: {
            valid: {
                data: 'test@gmail.com'
            },
            invalid: {
                data: 'kek@'
            }
        }
    },
    {
        path: '/objectid',
        middleware: dry.body({
            data: { type: dry.Types.ObjectId }
        }),
        payload: {
            valid: {
                data: '6156022b0000000000000342'
            },
            invalid: {
                data: 'random'
            }
        }
    },
    {
        path: '/pan',
        middleware: dry.body({
            data: { type: dry.Types.PAN_IN }
        }),
        payload: {
            valid: {
                data: 'ABCDE1234F'
            },
            invalid: {
                data: 'XYZ123456J'
            }
        }
    },
    {
        path: '/uuid',
        middleware: dry.body({
            data: { type: dry.Types.uuid }
        }),
        payload: {
            valid: {
                data: '9a7b478f-bdf2-4e2b-b58c-2bd052312684'
            },
            invalid: {
                data: 'kek'
            }
        }
    },
    {
        path: '/number',
        middleware: dry.body({
            data: { type: Number, min: 10, max: 15 }
        }),
        payload: {
            valid: {
                data: 11
            },
            invalid: {
                data: 9
            }
        }
    }
]

module.exports = { routeConfigs }
