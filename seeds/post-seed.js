const Post = require('../models/Post');

const postData = [
    {
        title: '1 post',
        text: '1 text ',
        user_id: '1'
    },
    {
        title: '2 post',
        text: '2 text ',
        user_id: '2'
    },
    {
        title: '3 post',
        text: '3 text ',
        user_id: '3'
    },
    {
        title: '4 post',
        text: '4 text ',
        user_id: '4'
    },
    {
        title: '5 post',
        text: '5 text ',
        user_id: '3'
    },
    {
        title: '6 post',
        text: '6 text ',
        user_id: '3'
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
