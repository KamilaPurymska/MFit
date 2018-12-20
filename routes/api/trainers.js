const express = require('express');
const router = express.Router();
const User = require('../../models/user');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const sgMail = require('@sendgrid/mail');

router.get('/', (req, res, next) => {
  User.findById(req.session.currentUser._id)
    .then((myself) => {
      if (!myself) {
        res.json({ error: 'not-found' }).status(404);
      }
      // empty preferences
      if (!myself.preferences.city && !myself.preferences.gender && !myself.preferences.styles && myself.preferences.goals.length === 0) {
        return User.find({ isTrainer: true })
          .then((trainerList) => {
            if (!trainerList) {
              res.json({message: 'not-found'}).status(404);
            }
            res.status(200);
            return res.json(trainerList);

          })
          .catch(next)
      }
      if (myself.preferences.gender == "Doesnt matter") {
        return User.find({ "preferences.city": myself.preferences.city, "preferences.styles": myself.preferences.styles, "preferences.goals": { $all: myself.preferences.goals } })
          .then((arrayOfUsersAndTrainers) => {
            const arrayOfTrainers = arrayOfUsersAndTrainers.filter((user) => {
              return user.isTrainer
            })
            res.status(200).json(arrayOfTrainers)
          })
      } else {
        return User.find({ "preferences.city": myself.preferences.city, "preferences.styles": myself.preferences.styles, "preferences.gender": myself.preferences.gender, "preferences.goals": { $all: myself.preferences.goals } })
        .then((arrayOfUsersAndTrainers) => {
          const arrayOfTrainers = arrayOfUsersAndTrainers.filter((user) => {
            return user.isTrainer
          })
          res.status(200).json(arrayOfTrainers)
        })
      }
    })
    .catch(next)
})


router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  if (!ObjectId.isValid(id)) {
    res.json({ erros: 'not-id-valid' }).status(402);
  }


  User.findById(id)
    .then((trainer) => {
      if (!trainer) {
        res.json({ error: 'not-found' }).status(404)
      }
      return User.findOne(req.session.currentUser)
        .then((user) => {
          if (!user) {
            res.json({ error: 'not-found' }).status(404)
          }
          let isFollowing = false;
          for (let i = 0; i < user.savedtrainers.length; i++) {
            if (trainer._id.equals(user.savedtrainers[i])) {
              isFollowing = true
            }
          }
          
         
          if (isFollowing) {
            res.status(200).json({ trainer, message: 'Unfollow' });
          } else {
            res.status(200).json({ trainer, message: 'Follow' });
          }
        })
    })
    .catch(next)
});

router.post('/email', (req, res, next) => {
  const { reciver, sender, topic, text } = req.body;
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: reciver,
    from: sender,
    subject: topic,
    text: text,
  };
  sgMail.send(msg)
  .then((msg) => {
    res.status(200).json(msg)
  })

})


router.post('/:id/follow', (req, res, next) => {
  const trainerId = req.params.id;
  // cannot add yourself

  // can not add many times
  User.findById(req.session.currentUser._id)
    .then(user => {
      const isInArray = user.savedtrainers.some((savedTrainerId) => {
        return savedTrainerId.equals(trainerId);
      });
      if (!isInArray) {
        user.savedtrainers.push(ObjectId(trainerId));
        user.save()
          .then((user) => {
            req.session.currentUser = user;
            res.status(200).json({ message: 'Unfollow' });
          })
          .catch(err => {
            console.log(err);
          })
      } else {
        user.savedtrainers.pull(ObjectId(trainerId))
        user.save()
          .then((user) => {
            req.session.currentUser = user;
            res.status(200).json({ message: 'Follow' });
          })
          .catch(err => {
            console.log(err);
          })
      }
    })
    .catch(next);

})





module.exports = router;


