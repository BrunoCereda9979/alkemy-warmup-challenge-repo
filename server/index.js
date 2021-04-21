const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();

// middlewares
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(morgan('dev'));

// database 
const db = require('./db/database');

// test database connection
db.authenticate()
.then(() => {
    console.log('Connected to database...')
})
.catch(err => console.log('Cant connect to database', err))

// routes
const postsRoute = require('./routes/posts');

// route handling
app.use('/api/v1/posts', postsRoute);
app.use('/uploads', express.static('uploads'));

app.listen(process.env.APP_PORT || 3001, () => {
    console.log(`Server listening on port ${process.env.APP_PORT}...`);
});