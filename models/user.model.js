const {Sequelize, DataTypes, Model} = require('sequelize');
const sequelize = require('../services/mysql.service');

class User extends Model {
}

User.init({
    firstName: {
        type: DataTypes.STRING,
    },
    lastName: {
        type: DataTypes.STRING
    }
}, {sequelize, modelName: 'User'});

module.exports = User;
