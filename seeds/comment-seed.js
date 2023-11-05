const Comment = require('../models/Comment');

const commentData = [
    {
        text: '1 lorem uipsinmsd skfhskfnks',
        user_id: 1,
        post_id: 1,
    },
    {
        text: '2 lorem uipsinmsd skfhskfnks',
        user_id: 2,
        post_id: 2,
    },
    {
        text: '3 lorem uipsinmsd skfhskfnks',
        user_id: 3,
        post_id: 3,
    },
    {
        text: '4 lorem uipsinmsd skfhskfnks',
        user_id: 1,
        post_id: 2,
    },
    {
        text: '5 lorem uipsinmsd skfhskfnks',
        user_id: 2,
        post_id: 3,
    },
    {
        text: '6 lorem uipsinmsd skfhskfnks',
        user_id: 3,
        post_id: 3,
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;