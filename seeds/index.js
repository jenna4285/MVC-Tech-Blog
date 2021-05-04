const sequelize = require('../config/connection');
const { User, Blog, Comment  } = require('../models');
const seedUsers = require('./seedUsers');
const blogData = require('./blogData');
const seedComments = require('./seedComments');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();
  console.log("Users Created");
  
  await blogData();
  console.log("Blog Created");

  await seedComments();
  console.log("Comments created");
  
    process.exit(0);
};

seedAll();
