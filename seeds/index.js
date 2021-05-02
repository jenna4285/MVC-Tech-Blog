const sequelize = require('../config/connection');
const blogData = require('./blogData');
const seedUsers = require('./seedUsers');
const seedComments = require('./seedComments');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();
  
  await blogData();

  await seedComments();

    process.exit(0);
};

seedAll();
