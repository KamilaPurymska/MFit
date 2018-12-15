const express = require('express');
const router = express.Router();
const User = require('../../models/user');

router.get('/', (req, res, next) => {
  return res.status(200).json({
    message: 'This is prefpage'
  });
});

router.put('/', (req, res, next) => {
  const {goals, profession, gender, active, age, city } = req.body;
  console.log(req.body)
  const userId = req.session.currentUser._id
  const updateData = {
    preferences: {
      goals,
      profession,
      gender,
      active,
      age,
      city,
    }
  }

  User.findByIdAndUpdate(userId, updateData, {new: true} )
  .then(result => {
      if(!result)
      {
        res.status(404).json({ error: 'not-found' });
      }
      req.session.currentUser = result
      res.json(result);
  })
});


module.exports = router;
