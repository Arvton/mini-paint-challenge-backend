require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 8080
const signup = require('./routes/signup')

app.use(express.json())
app.use(cors())
app.use(express.static('public'))

app.use('/signup', signup)

app.get('/', (req, res) => {
  res.send(`<h1>This is the backend for Mini Paint Challenge</h1>`)
})

app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`)
})