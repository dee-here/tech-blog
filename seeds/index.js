const seedUsers = require('./user-seed');
const seedPost = require('./post-seed');
const commentSeed = require('./comment-seed');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({force: true});
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');

    await seedPost();
    console.log('\n----- POSTS SEEDED -----\n');
    
    await commentSeed();
    console.log('\n----- COMMENT SEEDED -----\n');

    process.exit(0);
}

seedAll();