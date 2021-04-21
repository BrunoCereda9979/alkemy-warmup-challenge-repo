const express = require('express');
const router = express.Router();
const db = require('../db/database');
const Post = require('../models/Post');

router.get('/', (req, res) => {
    Post.findAll()
    .then(posts => { 
        if (posts <= 0) {
            res.status(500).json({
                'message': 'There are no posts in the database'
            })
        }
        else {
            console.log(posts);
            res.status(200).json({
                'posts': posts
            })
        }
    })
    .catch(err => console.log(err))
});

module.exports = router;