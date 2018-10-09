const mongoose = require('mongoose')
const { Schema } = mongoose

const PostSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
})

mongoose.model('post', PostSchema)
