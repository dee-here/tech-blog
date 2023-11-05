const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');



//User has many posts

User.hasMany(Post, {
    foreignKey: 'user_id',
    // onDelete: 'CASCADE'
});

//post belongs to a user
Post.belongsTo(User, {
    foreignKey: 'user_id',
    // onDelete: 'CASCADE'
});

//Post has many comments
Post.hasMany(Comment, {
    foreignKey: 'post_id',
    // onDelete: 'CASCADE'
});

//comments belong to a post
Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    // onDelete: 'CASCADE'
});

//user has many comments
User.hasMany(Comment, {
    foreignKey: 'user_id'
});

//comment belongs to User
Comment.belongsTo(User, {
    foreignKey: 'user_id',
});