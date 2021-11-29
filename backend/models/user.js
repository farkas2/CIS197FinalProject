const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  dateJoined: { type: String, required: false },
  favoritePlays: { type: String, required: false },
})

module.exports = model('User', userSchema)
