const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
require('dotenv').config()

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }, () =>
  console.log('Mongoose is connected')
)
mongoose.Promise = global.Promise

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

/* Routes */
app.use('/', require('./routes'))

app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message })
})

const port = process.env.PORT || 3001

app.listen(port, () => console.log(`Server running on port ${port}`))
