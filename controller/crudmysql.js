const User = require('../models/info');
//const db = require('../utils/mysqlcon');
exports.createInfo = (req, res, next) => {
    console.log('req', req.body);
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const city = req.body.city;
    User.create({
        firstName: firstName,
        lastName: lastName,
        city: city
    }).then((result) => {
        console.log(User.firstName);
        res.status(201).json(result.get());
    }).catch(err =>
        res.status(500).json(err)
    );

}
exports.updateInfo = (req, res, next) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const city = req.body.city;

    User.update({ firstName: firstName, lastName: lastName, city: city }, { where: { id: req.params.id } }).then((result => {
        res.status(200).json(result);
    })).catch(err => res.status(500).json(err))

}
exports.deleteInfo = (req, res, next) => {
    User.destroy({ where: { id: req.params.id } }).then((result => {
        res.status(200).json(result);

    })).catch(err => {
        res.status(500).json(err)
    });

}
exports.getinfo = (req, res, next) => {
    User.findAll({}).then(users => {
        console.log(JSON.stringify(users));
        res.status(200).json(users);

    }).catch(err =>
        res.status(500).json(err)
    );

}