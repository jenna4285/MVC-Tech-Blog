const User = require('./User');
const Blogs = require('./Blogs');
const Comments = require('./Comments');

User.hasMany(Blogs, {
  foreignKey: 'id',
});

Blogs.belongsTo(User, {
  foreignKey: 'id',
});

Comments.belongsTo(User, {
  foreignKey: 'id',
});

User.belongsToMany(Comments, {
  foreignKey: 'id',
});

Comments.belongsTo(User, {
  foreignKey: 'id',
})

Comments.belongsTo(Blogs, {
  through: User,
  foreignKey: 'id',
});

Blogs.belongsToMany(Comments,{
  through: User,
  foreignKey: 'id',
})

module.exports = { User, Blogs, Comments };
