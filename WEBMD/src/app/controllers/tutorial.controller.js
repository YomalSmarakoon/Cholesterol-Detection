const db = require("../models");
const Tutorial = db.tutorial;

// Create and Save a new user
exports.create = (req, res) => {
    const tutorial = new Tutorial({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        password: req.body.password,
        cpassword: req.body.cpassword,
      });
    
      // Save user in the database
      tutorial
        .save(tutorial)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Tutorial."
          });
        });
    };