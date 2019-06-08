const Sequelize = require('sequelize');

const sequelize = new Sequelize('userInfo', 'root', '', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;