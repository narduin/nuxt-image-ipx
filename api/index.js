const express = require('express')
const app = express()
const port = 3003

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))

app.listen(port, () => {
  console.log(`Mock api on localhost:${port}`)
})

export default {
  path: '/api',
  handler: app
}