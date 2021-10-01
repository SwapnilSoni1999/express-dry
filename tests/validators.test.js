const { app, server } = require('./server.test')
const { routeConfigs } = require('./config.spec')
const supertest = require('supertest')

for (const config of routeConfigs) {
    test(`${config.path.slice(1)}`, async () => {
        const res = await supertest(app)
            .post(config.path)
            .send({ data: 'xyz' })

        expect(res.statusCode).toBe(400)
        return
    })
}

afterAll(() => {
    server.close()
})
