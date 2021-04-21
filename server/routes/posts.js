const express = require('express');
const router = express.Router();
const mysql2 = require('mysql2');
const dotenv = require('dotenv').config();
const { Sequelize } = require('sequelize');

// database connection
const sequelize = new Sequelize({
    database: 'blog-app-db',
    username: 'root',
    password: '',
    dialect: 'mssql',
    logging: msg => console.log(`-> New DB query: ${msg}`)
});

// test database connection
try {
    await sequelize.authenticate();
    console.log('Stablished connection with database...');    
} 
catch (error) {
    console.log(`Unable to connect to database ${error}`);
}

module.exports = router;