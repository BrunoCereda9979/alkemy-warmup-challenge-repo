const { Sequelize, DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../db/database');

// post model
const Post = sequelize.define('post', {
    post_id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    post_title: {
        type: DataTypes.STRING,
    },
    post_content: {
        type: DataTypes.STRING,
    },
    post_image: {
        type: DataTypes.STRING,
    },
    post_category: {
        type: DataTypes.STRING,
    },
}, {
    tableName: 'posts'
});

module.exports = Post;