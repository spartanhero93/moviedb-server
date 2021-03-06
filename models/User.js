const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = new Schema({
  userName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

mongoose.model('User', UserSchema)
