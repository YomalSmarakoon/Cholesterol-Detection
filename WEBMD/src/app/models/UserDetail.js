const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userDetailSchema = new Schema({
  name:{
    type: String
  },
  age:{
    type: Number
  },
  height:{
    type: Number 
  },
  weight:{
    type: Number
  },
  gender:{
    type: String,
    enum: ["Male","Female","notFound"]
  },
  smoker:{
    type: String,
    enum:["yes","no"]
  },
  exercise:{
    type: String,
    enum:["daily","week","month","none","other"]
  },
  disease:{
    type: String,
    enum:["cholesterol","pressure","heart_attack","stroke"]
  },
  habits:{
    type: String,
    enum:["fast","home","junk","street","other"]
}

}, {timestamps: true})

const UserDetail = mongoose.model('UserDetail', userDetailSchema)
module.exports = UserDetail