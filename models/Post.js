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

const PostModel = mongoose.model('Post', PostSchema)
module.exports = PostModel
