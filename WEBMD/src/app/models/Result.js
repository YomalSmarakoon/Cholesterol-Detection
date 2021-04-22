const mongoose = require('mongoose')
const Schema = mongoose.Schema

const resultSchema = new Schema({
  name:{
    type: String
  },
  pred:{
    type: String
  }
}, {timestamps: true})

const result = mongoose.model('result', resultSchema)
module.exports = result