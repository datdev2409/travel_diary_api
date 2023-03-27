const app = require('./src/app')

const PORT = process.env.PORT || 3000
const server = app.listen(PORT, () => {
  console.log(`Server::running at ${PORT}`)
})

process.on('SIGINT', () => {
  server.close(() => {
    console.log('Server::exit')
  })
})
