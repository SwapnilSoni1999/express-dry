const { Router } = require('express')
const { routeConfigs } = require('./config.spec')

const router = Router()

for (const config of routeConfigs) {
    router.use(config.path, config.middleware, (_, res) => res.status(200).end())
}

module.exports = router
