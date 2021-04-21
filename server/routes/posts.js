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

// post a new post
router.post('/', (req, res) => {
    let postTitle = req.body.postTitle;
    let postContent = req.body.postContent;
    let postImage = req.body.postImage;
    let postCategory = req.body.postCategory;

    Post.create({post_title: postTitle, post_content: postContent, post_image: postImage, post_category: postCategory})
    .then(post => {
        res.status(200).json({
            'message': 'New post created successfuly'
        })
    })
    .catch(err => {
        res.status(500).json({
            'message': 'Could not create post',
            'error': err
        })
    })
});

// edit a post
router.patch('/:id', (req, res) => {
    let postTitle = req.body.postTitle;
    let postContent = req.body.postContent;
    let postImage = req.body.postImage;
    let postCategory = req.body.postCategory;

    Post.update({post_title: postTitle, 
        post_content: postContent, 
        post_image: postImage, 
        post_category: postCategory
    }, { where: { post_id: req.params.id } })
    .then(rowsUpdated => {
        res.status(200).json({
            'message': 'Post updated successfuly'
        })
    })
    .catch(err => {
        res.status(500).json({
            'message': 'Could not edit the post',
            'error': err.message
        })
    })
});

module.exports = router;