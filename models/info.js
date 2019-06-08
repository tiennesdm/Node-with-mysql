const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const userInformation = sequelize.define('userinfo2', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    firstName: Sequelize.STRING,
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = userInformation;