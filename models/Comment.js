const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Post = require('./Post');
const User = require('./User');

class Comment extends Model { }

Comment.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      text: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        // allowNull: false,
        // unique: true,
        references: {
            model: User,
            key: 'id',
          }
      },
      post_id: {
        type: DataTypes.INTEGER,
        // allowNull: false,
        // unique: true,
        references: {
            model: Post,  // check if this uses Class name Post or modelname 'post
            key: 'id',
          }
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'comment',
    }
  );
  
  module.exports = Comment;
