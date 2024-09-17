const router = require("express").Router();
const { Comment, Post } = require("../models");

// GET all posts for dashboard 
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: Comment,
        },
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    console.log('Session:', req.session);
    console.log('Logged in status:', req.session.loggedIn);
    //res.send('Logged in status:', req.session.loggedIn);

    res.render("homepage", {
      posts,
      loggedIn: req.session.loggedIn,
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// GET all posts for homepage (Same as dashboard but with only your posts)
router.get("/dashboard", async (req, res) => {
  console.log(`home is found`,req.session);

  try {
    const userId = req.session.userId;

    if (userId) {
      // If user is not logged in, redirect to the login page
    

      const postData = await Post.findAll({
        where: {
          user_id: userId,
        },
        include: [
          {
            model: Comment,
          },
        ],
      });

      const posts = postData.map((post) => post.get({ plain: true }));

      res.render("dashboard", {
        posts,
        loggedIn: req.session.loggedIn,
        username:req.session.username

      });
    } else {
      res.redirect("/login")
    }

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one post
router.get("/post/:id", async (req, res) => {
 
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.redirect("/login");
  } else {
    // If the user is logged in, allow them to view the individual posts
    try {
      const postData = await Post.findByPk(req.params.id, {
        include: [
          {
            model: Comment,
          },
        ],
      });

      const post = postData.get({ plain: true });
      console.log(post);
      res.render("post", { post, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
  
});

// GET one painting
router.get("/post/:id", async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.redirect("/login");
  } else {
    // If the user is logged in, allow them to view the painting
    try {
      const dbPaintingData = await Painting.findByPk(req.params.id);

      const painting = dbPaintingData.get({ plain: true });

      res.render("painting", { painting, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});


router.get("/login", (req, res) => {
  
  res.render("login");
});

module.exports = router;
