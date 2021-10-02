# Express-Dry
A simple lightweight [Express.js](https://expressjs.com) Validation Library (With predefined validators [WIP])

## How to install
- install from [npmjs](https://www.npmjs.com/package/express-dry)
```
npm install express-dry
```
or
```
yarn add express-dry
```

- Include in your project
Eg. **routes/auth.js**
```js
const { Router } = require('express')
const dry = require('express-dry')

const router = Router()

router.post('/login', dry.body({
  username: { type: String },
  password: { type: String },
  foo: { type: Boolean, required: false }
}), async (req, res) => {})

module.exports = router
```
After this the `.body` will return a middleware with packed automatic validation inside and it will directly return error response to client with a `{message: ''}` in it

- Same with `params` and `query`

```js
dry.params({ id: { type: Number } }, { allowExtraKeys: false })
dry.query({ search: { type: String, required: false } }, { allowExtraKeys: true, statusCode: 200 })
```

## Complete Example
router.post('/login', dry.body({
  name: { type: String },
  age: { type: Number, min: 18, max: 35 },
  password: { type: String, minLength: 8, maxLength: 20 },
  consent: { type: Boolean, required: false }
}, { allowExtraKeys: false }), async (req, res) => {})

## Features
- All Javascript supported primitives
- optional payload validation with `required: false`
- Will be adding more custom validations such as Email, MongoObjectId and many more :)

## Credits
@uditkarode for [drytypes](https://www.npmjs.com/package/drytypes)

### License
MIT &copy;Swapnil Soni
