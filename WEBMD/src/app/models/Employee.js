const mongoose = require('mongoose')
const Schema = mongoose.Schema

const employeeSchema = new Schema({
  fname:{
    type: String
  },
  lname:{
    type: String
  },
  email:{
    type: String 
  },
  password:{
    type: String
  },
  cpassword:{
    type: String
  }
}, {timestamps: true})

const Employee = mongoose.model('Employee', employeeSchema)
module.exports = Employee