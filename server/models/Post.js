const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db/database');

// post model
const Post = sequelize.define('post', {
    postTitle: {
        type: DataTypes.STRING,
    },
    postContent: {
        type: DataTypes.STRING,
    },
    postImage: {
        type: DataTypes.STRING,
    },
    postCategory: {
        type: DataTypes.STRING,
    },
    postCreationDate: {
        type: DataTypes.STRING,
    }
});

module.exports = Post;