const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080

app.get('/', (req, res) => {
  res.send(`<h1>This is the backend for Mini Paint Challenge</h1>`)
})

app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`)
})