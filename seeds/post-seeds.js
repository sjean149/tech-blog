const { Post } = require('../models');

const postData = [
  {
    title: 'Exploring the World of JavaScript',
    contents: 'JavaScript is a versatile language used for web development, server-suser_ide applications, and more.',
    user_id: 1,
    date_created: new Date(),
  },
  {
    title: 'Understanding Sequelize ORM',
    contents: 'Sequelize is a powerful ORM for Node.js, offering easy interaction with SQL databases.',
    user_id: 2,
    date_created: new Date(),
  },
  {
    title: 'How to Use Handlebars with Express',
    contents: 'Handlebars is a templating engine that allows you to create dynamic HTML content with minimal effort.',
    user_id: 3,
    date_created: new Date(),
  },
  {
    title: 'Getting Started with Node.js',
    contents: 'Node.js allows you to run JavaScript on the server suser_ide, enabling the creation of scalable network applications.',
    user_id: 3,
    date_created: new Date(),
  },
  {
    title: 'CSS Tricks for Responsive Design',
    contents: 'Learn the latest CSS techniques to create responsive and visually appealing web designs.',
    user_id: 1,
    date_created: new Date(),
  },
];

const seedPosts = async () => {
  await Post.bulkCreate(postData);
};

module.exports = seedPosts;
