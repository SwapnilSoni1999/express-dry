const express = require('express')
const dry = require('../index')

/**
 * Spin up the server
 */
const PORT = 5000
const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/test1', dry.body({
    name: { type: String, required: true },
    age: { type: Number, required: true }
}), (req, res) => {
    res.json(req.body)
})

app.use('/test2', dry.body({
    id: { type: dry.Types.ObjectId, required: true }
}), (req, res) => {
    res.json(req.body)
})

const server = app.listen(PORT, console.log(`Test server started on port ${PORT}`))


/**
 * Test begins
 */
const { default: axios } = require('axios')

const makeRequest = async (data, test) => {
    const res = await axios({
        method: 'GET',
        url: `http://localhost:${PORT}/test${test}`,
        data
    })
    return res.data
}

// Valid
makeRequest({ name: 'Swapnil', age: 21 }, 1).then(data => {
    console.log(data)
}).catch(err => {
    console.log(err.response.data)
})

//Invalid
makeRequest({ name: 21, age: 21 }, 1).then(data => {
    console.log(data)
}).catch(err => {
    console.log(err.response.data)
})

makeRequest({ id: 'xyz' }, 2).then(data => console.log(data))
    .catch(err => console.log(err.response.data))

// Global End
.then(() => server.close())