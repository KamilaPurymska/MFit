const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');


const User = require('../models/user');

const { isLoggedIn } = require('../helpers/middlewares');

router.get('/me', (req, res, next) => {
  if (!req.session.currentUser) {
    res.status(404).json({
      error: 'not-found'
    });
  } else {
    

    res.json(req.session.currentUser).status(200);
  }
});


router.get('/myProfile', (req, res, next) => {
  if (!req.session.currentUser) {
    res.status(404).json({
      error: 'not-found'
    });
  } else {
    User.findOne(req.session.currentUser)
    .populate('savedtrainers')
    .then((user) => {
        res.json(user).status(200);
    })
    .catch((next))  
  }
});

router.post('/login', (req, res, next) => {
  if (req.session.currentUser) {
    return res.status(401).json({
      error: 'unauthorized'
    });
  }

  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(422).json({
      error: 'validation'
    });
  }

  User.findOne({
      username
    })
    .then((user) => {
      if (!user) {
        return res.status(404).json({
          error: 'user not found'
        });
      }
      // TODO async bcrypt
      if (bcrypt.compareSync(password, user.password)) {
        req.session.currentUser = user;
        return res.status(200).json(user);
      }
      return res.status(404).json({
        error: 'username or password incorrect'
      });
    })
    .catch(next);
});


router.post('/signup', (req, res, next) => {
  const {
    username,
    password
  } = req.body;

  if (!username || !password) {
    return res.status(422).json({
      error: `can't be empty`
    });
  }

  User.findOne({
      username
    }, 'username')
    .then((userExists) => {
      if (userExists) {
        return res.status(422).json({
          error: 'username not unique'
        });
      }

      const salt = bcrypt.genSaltSync(10);
      const hashPass = bcrypt.hashSync(password, salt);

      const newUser = User({
        username,
        password: hashPass,
      });

      return newUser.save().then(() => {
        req.session.currentUser = newUser;
        res.json(newUser);
      });
    })
    .catch(next);
});

router.post('/logout', (req, res) => {
  req.session.currentUser = null;
  return res.status(204).send();
});

router.get('/private', isLoggedIn(), (req, res, next) => {
  res.status(200).json({
    message: 'This is a private message'
  });
});

module.exports = router;
