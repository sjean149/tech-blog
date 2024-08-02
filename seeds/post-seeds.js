const { Post } = require('../models');

const postData = [
  {
    title: 'Exploring the World of JavaScript',
    contents: 'JavaScript is a versatile language used for web development, server-side applications, and more.',
    name: 'John Doe',
    date_created: new Date(),
  },
  {
    title: 'Understanding Sequelize ORM',
    contents: 'Sequelize is a powerful ORM for Node.js, offering easy interaction with SQL databases.',
    name: 'Jane Smith',
    date_created: new Date(),
  },
  {
    title: 'How to Use Handlebars with Express',
    contents: 'Handlebars is a templating engine that allows you to create dynamic HTML content with minimal effort.',
    name: 'Alice Johnson',
    date_created: new Date(),
  },
  {
    title: 'Getting Started with Node.js',
    contents: 'Node.js allows you to run JavaScript on the server side, enabling the creation of scalable network applications.',
    name: 'Bob Brown',
    date_created: new Date(),
  },
  {
    title: 'CSS Tricks for Responsive Design',
    contents: 'Learn the latest CSS techniques to create responsive and visually appealing web designs.',
    name: 'Emily White',
    date_created: new Date(),
  },
];

const seedPosts = async () => {
  await Post.bulkCreate(postData);
};

module.exports = seedPosts;
