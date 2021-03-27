const {Sequelize} = require('sequelize');
var env = require('../environment');

const sequelize = new Sequelize(env.mysql.database, env.mysql.user, env.mysql.password, {
    host: env.mysql.host,
    dialect: 'mysql',
});
sequelize.sync();
module.exports = sequelize;
