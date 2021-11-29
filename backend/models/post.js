const { Schema, model } = require('mongoose')

const postSchema = new Schema({
  postText: { type: String, required: true },
  comments: { type: Object, required: false },
  author: { type: String, required: true },
})

module.exports = model('Post', postSchema)
