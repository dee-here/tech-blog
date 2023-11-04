const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');



//User has many posts

User.hasMany(Post);

//post belongs to a user
Post.belongsTo(User);

//Post has many comments
Post.hasMany(Comment);

//comments belong to a post
Comment.belongsTo(Post);
