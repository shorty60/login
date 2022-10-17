const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sessionSchema = new Schema({
  sessionID: {
    type: String,
    require: true,
  },
  userEmail: {
    type: String,
    require: true,
  },
})

module.exports = mongoose.model('Session', sessionSchema)
