const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const register = (req, res, next) =>{
    bcrypt.hash(req.body.password, 10, function(err, hashedPass){
        if(err){
            res.json({
                error: err
            })
        }

        let user = new User({
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            password: hashedPass,
            cpassword: hashedPass
        })
        user.save()
        .then(user => {
            res.json({
                message: 'User added Successfully!'
            })
        })
        .catch(error => {
            res.json({
                message: 'An error occured!'
            })
        })
    })
}

const login = (req, res, next) => {
    var username = req.body.username
    var password = req.body.password

    User.findOne({$or: [{email: username}]})
    .then(user => {
        if(user){
            bcrypt.compare(password, user.password, function(err, result){
                if(err){
                    res.json({
                        error: err
                    })
                }
                if(result){
                    let token = jwt.sign({fname: user.fname}, 'secretvalue', {expiresIn: '1h'})
                    res.json({
                        message: 'Login Successful!'
                    })
                }else{
                    res.json({
                        
                    })
                }
            })
        }else{
            res.json({
                message: 'No user found'
            })
        }
    })
}

const loginverify = (req, res, next) => {
    User.findOne({})
    .then(result=>{
      res.send(result);
    })
    .catch(err=>{
      console.log(err)
      res.status(500).json({
        error: err
      })
    });
  }

module.exports = {
    register, login, loginverify
}