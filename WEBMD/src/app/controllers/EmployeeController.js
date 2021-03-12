const { response } = require('express')
const Employee = require('../models/Employee')

const index = (req, res, next)=> {
  Employee.find()
  .then(response => {
    res.json({
      response
    })
  })
  .catch(error => {
    res.json({
      message: 'An error Occured!'
    })
  })
}

const show = (req, res, next) =>{
  let userId = req.body.userId
  Employee.findById(userId)
  .then(response => {
    res.json({
      response
    })
  })
  .catch(error => {
    res.json({
      message: 'An error Occured!'
    })
  })
}

const store = (req, res, next) => {
  let employee = new Employee({
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    password: req.body.password,
    cpassword: req.body.cpassword
  })
  employee.save()
  .then(response => {
    res.json({
      message: 'User added Successfully'
    })
  })
  .catch(error => {
    res.json({
      message: 'An error Occured!'
    })
  })
}

//delete user
const destroy = (req, res, next) => {
  let userId = req.body.userId
  Employee.findByIdAndRemove(userId)
  .then(() => {
    res.json({
      message: 'User deleted successfully'
    })
  })
  .catch(error => {
    res.json({
      message: 'An error Occured'
    })
  })
}

module.exports = {
  index, show, store, destroy
}