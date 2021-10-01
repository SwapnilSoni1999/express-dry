const { app, server } = require('./server.test')
const { routeConfigs } = require('./config.spec')
const supertest = require('supertest')

for (const config of routeConfigs) {
    test(`${config.path.slice(1)} - Invalid Inputs`, async () => {
        const res = await supertest(app)
            .post(config.path)
            .send(config.payload.invalid)

        expect(res.statusCode).toBe(400)
        return
    })

    if (config.payload?.valid) {
        test(`${config.path.slice(1)} - Valid Inputs`, async () => {
            const res = await supertest(app)
                .post(config.path)
                .send(config.payload.valid)

            expect(res.statusCode).toBe(200)
            return
        })
    }
}

afterAll(() => {
    server.close()
})
