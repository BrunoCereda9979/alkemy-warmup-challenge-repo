const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

// middlewares
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(morgan('dev'));


app.listen(process.env.APP_PORT || 3001, () => {
    console.log(`Server listening on port ${process.env.APP_PORT}...`);
});