const User = require('../models/User');

const userData = [
    {
        username: 'Apple',
        password: 'shdasdjsdfa',
        email: 'abc@abc.com'
    },
    {
        username: 'Orange',
        password: 'shdasdjsdfa',
        email: 'abc1@abc.com'
        
    },
    {
        username: 'Pear',
        password: 'shdasdjsdfa',
        email: 'abc3@abc.com'
    },
    {
        username: 'Plum',
        password: 'shdasdjsdfa',
        email: 'abc4@abc.com'
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;