const router = require('express').Router();
const { User, Blogs } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET all blogposts for homepage
router.get('/', async (req, res) => {
  try {
    const dbBlogsAll = await Blogs.findAll({
      include: [
        {
          model: Blogs,
          attributes: ['title', 'date_created'],
        },
      ],
    });

    const allBlogs = dbBlogsAll.map((blog) =>
      blog.get({ plain: true })
    );

    res.render('homepage', {
      allBlogs,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one blog (gallery)
// Use the custom middleware before allowing the user to access the blog
router.get('/blog/:id', withAuth, async (req, res) => {
  try {
    const dbBlogsAll = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: Blogs,
          attributes: ['title', 'date_created', 'details', 'author'],    
        },
      ],
    });

    const blog = dbBlogsAll.get({ plain: true });
    res.render('blog', { blog, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one painting
// Use the custom middleware before allowing the user to access the painting
// router.get('/painting/:id', withAuth, async (req, res) => {
//   try {
//     const dbPaintingData = await Painting.findByPk(req.params.id);

//     const painting = dbPaintingData.get({ plain: true });

//     res.render('painting', { painting, loggedIn: req.session.loggedIn });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// router.get('/login', (req, res) => {
//   if (req.session.loggedIn) {
//     res.redirect('/');
//     return;
//   }

//   res.render('login');
// });

module.exports = router;
