const { Schema, model } = require('mongoose')

const postSchema = new Schema({
  postPlay: { type: String, required: true },
  postText: { type: String, required: true },
  comments: { type: Array, required: false },
  author: { type: String, required: true },
})

module.exports = model('Post', postSchema)
