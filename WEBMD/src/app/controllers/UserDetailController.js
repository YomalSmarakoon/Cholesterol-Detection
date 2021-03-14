const UserDetail = require('../models/UserDetail')

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

module.exports = {
    detailForm
}