const { User } = require('../models');

const userData = [
  {
    name: 'John Doe',
    email: 'john.doe@example.com',
    password: 'password123',
  },
  {
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    password: 'password456',
  },
  {
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    password: 'password789',
  },
];

const seedUsers = async () => {
  try {
    await User.bulkCreate(userData, {
      individualHooks: true,
    });
    console.log('Users seeded successfully');
  } catch (err) {
    console.error('Error seeding users:', err);
  }
};

module.exports = seedUsers;
