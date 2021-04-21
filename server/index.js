const express = require('express');
const dotenv = require('dotenv').config()
const cors = require('cors');
const app = express();

app.listen(process.env.APP_PORT || 3001, () => {
    console.log(`Server listening on port ${process.env.APP_PORT}...`);
});