const UserDetail = require('../models/UserDetail')
const Result = require('../models/Result')

const detailForm = (req, res, next) =>{

        let userDetail = new UserDetail({
            name: req.body.name,
            age: req.body.age,
            height: req.body.height,
            weight: req.body.weight,
            gender: req.body.gender,
            smoker: req.body.smoker,
            exercise: req.body.exercise,
            disease: req.body.disease,
            habits: req.body.habits

        })
        userDetail.save()
        .then(userDetail => {
            res.json({
                message: 'User Details added Successfully!'
            })
        })
        .catch(error => {
            res.json({
                message: 'An error occured!'
            })
        })
}

const findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};
  
    result.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };


module.exports = {
    detailForm,findAll
}