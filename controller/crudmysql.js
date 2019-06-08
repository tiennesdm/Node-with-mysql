const User = require('../models/info');
//const db = require('../utils/mysqlcon');
exports.createInfo = (req, res, next) => {
    console.log('req', req.body);
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const city = req.body.city;
    //  const user = new User(firstName, lastName, city);
    /*  db.execute('INSERT INTO `userinfo2` (`firstName`,`lastName`,`city`) VALUES ('firstName','lastName','')')
          .then(result => {
              res.status(201).json(JSON.stringify(result[0]));
              //  console.log(result[0], result[1]);
          })
          .catch(err => {
              console.log(err);
          }); */
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

}
exports.deleteInfo = (req, res, next) => {

}
exports.getinfo = (req, res, next) => {

}