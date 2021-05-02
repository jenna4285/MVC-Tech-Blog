const { Comments } = require('../models');

const commentdata = [
  {
    author: 'Sal',
    date_created: 'May 1, 2021',
    description:
      'Branches with pink apricot blossoms against a blue background.',
  },
  {
    author: 'Lernantino',
    date_created: 'May 1, 2021',
    description: 'Pink cosmos flowers against a blue sky.',
  },
  {
    author: 'Lernantino',
    date_created: 'May 1, 2021',
    description: 'Sandy beach with the blue sea and sky in the background.',
  },
  {
    author: 'Sal',
    date_created: 'May 1, 2021',
    description: 'Two beach chairs under a beach umbrella on the beach.',
  },
  {
    author: 'Amiko',
    date_created: 'May 1, 2021',
    description: 'Sun setting in the horizon with waves lapping the shore.',
  },
  {
    author: 'Sal',
    date_created: 'May 1, 2021',
    description:
      'Trees with red, orange, yellow leaves reflected on a still lake.',
  },
  {
    author: 'Lernantino',
    date_created: 'May 1, 2021',
    description:
      'Mountains with red and yellow leaves against a background of hazy rolling hills.',
  },
  {
    author: 'Sal',
    date_created: 'May 1, 2021',
    description:
      'Trees with white frozen branches reflected on a frozen river against a light pink sky.',
  },
  {
    author: 'Amiko',
    date_created: 'May 1, 2021',
    description:
      'Log cabin blanketed in heavy white snow with tall snow covered pine trees in the background.',
  },
];

const seedComments = () => Comments.bulkCreate(commentdata);

module.exports = seedComments;
