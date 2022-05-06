const Sequelize = require('sequelize');

const connection = new Sequelize('pok', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00'
});

module.exports = connection;