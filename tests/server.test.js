/* server test
*/
const express = require('express')
const routes = require('./routes.test')
/**
 * Spin up the server
 */
const PORT = 5000
const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(routes)

const server = app.listen(PORT)

module.exports = { app, server }
