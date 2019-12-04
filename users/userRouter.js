const express = require('express');

const db = require('./userDb');

const router = express.Router();

router.post('/', validateUser, (req, res) => {
  // do your magic!
  const { name } = req.body;

  db.insert({ name: name })
    .then(user => {
      res.status(201).json(user);
    })
    .catch(error => {
      res.status(500).json({ message: "Could not add user to database." });
    });
});

router.post('/:id/posts', (req, res) => {
  // do your magic!
});

router.get('/', (req, res) => {
  // do your magic!
  db.get()
    .then(users => {
      if (users) {
        res.status(200).json(users);
      } else {
        res.status(404).json({ message: "No users found." });
      }
    })
    .catch(error => {
      res.status(500).json({ message: "There was an error retrieving users from database." });
    })
});

router.get('/:id', (req, res) => {
  // do your magic!
});

router.get('/:id/posts', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

//custom middleware

function validateUserId(req, res, next) {
  // do your magic!
  const id = req.params.id;

  db.getById(id)
    .then(user => {
      if (user) {
        req.user = user;
      } else {
        res.status(400).json({ message: "Invalid user id." });
      }
    })
    .catch(error => {
      next(new Error("Could not validate user id (database error)"));
    });
}

function validateUser(req, res, next) {
  // do your magic!
  if (req.body) {
    if (req.body.name) {
      next();
    } else {
      res.status(400).json({ message: "Missing required name field" });
    }
  } else {
    res.status(400).json({ message: "Missing user data" });
  }
}

function validatePost(req, res, next) {
  // do your magic!
  if (req.body) {
    if (req.body.text) {
      next();
    } else {
      res.status(400).json({ message: "Missing required text field" });
    }
  } else {
    res.status(400).json({ message: "Missing post data" });
  }

}

module.exports = router;
