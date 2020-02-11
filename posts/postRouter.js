const express = require('express');

const db = require('./postDb');

const router = express.Router();

router.get('/', (req, res) => {
  // do your magic!
  db.get()
    .then(posts => res.status(200).json(posts))
    .catch(error => {
      res.status(500).json({ message: "Could not get posts." });
    });
});

router.get('/:id', validatePostId, (req, res) => {
  // do your magic!
  res.status(200).json(req.post);
});

router.delete('/:id', validatePostId, (req, res) => {
  // do your magic!
  const id = req.params.id;

  db.remove(id)
    .then(() => res.status(200).json())
    .catch(error => {
      res.status(500).json({ message: "Could not delete post." });
    })
});

router.put('/:id', validatePostId, (req, res) => {
  // do your magic!
  const id = req.post.id;

  db.update(id, { text: req.body.text })
    .then(() => {
      res.status(200).json({ ...req.post, text: req.body.text });
    })
    .catch(error => {
      res.status(500).json({ message: "Post could not be updated." });
    })
});

// custom middleware

function validatePostId(req, res, next) {
  // do your magic!
  const id = req.params.id;

  db.getById(id)
    .then(post => {
      if (post) {
        req.post = post;
        next();
      } else {
        res.status(400).json({ message: "Invalid post id." });
      }
    })
    .catch(error => {
      next(new Error("Could not validate post id (database error)"));
    });
}

module.exports = router;
