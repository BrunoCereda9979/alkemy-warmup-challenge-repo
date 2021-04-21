const express = require('express');
const router = express.Router();
const db = require('../db/database');
const Post = require('../models/Post');

// get all posts
router.get('/', (req, res) => {
    Post.findAll()
    .then(posts => { 
        if (posts <= 0) {
            res.status(500).json({
                'message': 'There are no posts in the database'
            })
        }
        else {
            res.status(200).json({
                'posts': posts
            })
        }
    })
    .catch(err => console.log(err))
});

// get post by id
router.get('/:id', (req, res) => {
    const postId = req.params.id;
    console.log(postId);
    Post.findOne({ where: { post_id: postId } })
    .then(post => {
        if (post === null) {
            res.status(204).json({
                'message': 'Post not found'
            })
        }
        else {
            res.status(200).json({
                'post': post
            })
        }
    })
    .catch(err => {
        res.send(500).json({
            'message': err.message
        })
    })
});

module.exports = router;