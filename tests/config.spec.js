const dry = require('../index')

const routeConfigs = [
    {
        path: '/aadhar',
        middleware: dry.body({
            data: { type: dry.Types.AadhaarNumber }
        })
    },
    {
        path: '/email',
        middleware: dry.body({
            data: { type: dry.Types.EmailAddress }
        })
    },
    {
        path: '/objectid',
        middleware: dry.body({
            data: { type: dry.Types.ObjectId }
        })
    },
    {
        path: '/pan',
        middleware: dry.body({
            data: { type: dry.Types.PAN_IN }
        })
    },
    {
        path: '/uuid',
        middleware: dry.body({
            data: { type: dry.Types.uuid }
        })
    }
]

module.exports = { routeConfigs }
