const express = require('express');
const router = express.Router();
const mysql2 = require('mysql2');

router.get('/', (req, res) => {
    res.json({
        'message': 'Hello from endpoint'
    })
});

module.exports = router;