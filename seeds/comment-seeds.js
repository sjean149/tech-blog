const { Comment } = require('../models');

const commentData = [
  {
    username: 'user123',
    comment: 'This is a great post about JavaScript!',
    date_created: new Date(),
    post_id: 1, // assuming this corresponds to an existing post ID
  },
  {
    username: 'tech_guru',
    comment: 'Sequelize makes database management a breeze!',
    date_created: new Date(),
    post_id: 2,
  },
  {
    username: 'web_dev',
    comment: 'Handlebars is my favorite templating engine!',
    date_created: new Date(),
    post_id: 3,
  },
  {
    username: 'nodejs_fan',
    comment: 'Node.js is perfect for building scalable applications.',
    date_created: new Date(),
    post_id: 4,
  },
  {
    username: 'css_master',
    comment: 'Responsive design is key to a great user experience!',
    date_created: new Date(),
    post_id: 5,
  },
];

const seedComments = async () => {
  await Comment.bulkCreate(commentData);
};

module.exports = seedComments;
