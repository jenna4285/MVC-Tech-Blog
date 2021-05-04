const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');

User.hasMany(Blog, {
  foreignKey: 'id',
});

Blog.belongsTo(User, {
  foreignKey: 'id',
});

Comment.belongsTo(User, {
  through: Blog,
  foreignKey: 'author',
});

User.belongsToMany(Comment, {
  through: Blog,
  foreignKey: 'author',
});

module.exports = { User, Blog, Comment };
