const sequelize = require('../config/connection');
const postSeeds = require('./post-seeds');
const commentSeeds = require('./comment-seeds');
const userSeeds = require('./user-seeds');


const seedAll = async () => {
  await sequelize.sync({ force: true });

  await userSeeds(); 
  
  await postSeeds();

  await commentSeeds();
  
  console.log('All seeds have been planted!');

  process.exit(0);
};

seedAll();
