const app = require('./index.js')
const port = process.env.PORT || 3000
const server = app.listen(port, () => {
  const host = server.address().address || 'localhost'
  console.log(`Listening at http://${host}:${port}`)
})
