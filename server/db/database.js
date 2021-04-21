const dotenv = require('dotenv').config();
const { Sequelize } = require('sequelize');

// database connection
module.exports = db = new Sequelize({
    username: 'root',
    password: '',
    database: 'blog-app-db',
    dialect: 'mysql',
    logging: msg => console.log(`-> New DB query: ${msg}`)
});