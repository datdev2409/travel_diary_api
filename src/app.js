const compression = require('compression')
const express = require('express')
const { default: helmet } = require('helmet')
const morgan = require('morgan')
const app = express()

// init midddlewares
app.use(morgan('dev'))
app.use(helmet())
app.use(compression())

// init routes
app.get('/', (req, res, next) => {
  const strCompress = "Hello, World!"

  return res.status(200).json({
    message: 'Hello, World!',
    metadata: strCompress.repeat(10000)
  })
})

module.exports = app
