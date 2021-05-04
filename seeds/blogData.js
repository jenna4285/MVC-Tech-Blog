const { Blog } = require('../models');

const blogData = [
  {
    title: 'HTML Blog',
    date_created: 'April 2, 2021 07:00:00',
    details: 'This is an entire blog post about HTML. It is many paragraphs and very exciting.',
    author: 'Sal',
  },
  {
    title: 'CSS Blog',
    date_created: 'April 4, 2021 07:00:00',
    details: 'CSS is a thing and I have a lot to say about it!',
    author: 'Amiko',
  },
  {
    title: 'Javascript Blog',
    date_created: 'April 7, 2021 13:00:00',
    details: 'Javascript is so diverse I wrote all of these things about it in a blog post',
    author: 'Sal',
  },
  {
    title: 'Back End Blog',
    date_created: 'April 20, 2021 07:00:00',
    details: 'Back End is the stuff you do not see but makes things work!',
    author: 'Sal',
  },
];

const seedBlog = () => Blog.bulkCreate(blogData);

module.exports = seedBlog;