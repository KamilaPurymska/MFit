const express = require('express');
const router = express.Router();
const User = require('../../models/user');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

router.get('/', (req, res, next) => {

  //const pref = {$or: [{isTrainer = true}, {}]}
  //const pref = {isTrainer = true}
  /*
    User.find({isTrainer: true})
      .then((trainerList) => {
        res.status(200);
        res.json(trainerList);
      })
      .catch(next)
  
  });
  */


  User.findById(req.session.currentUser._id)
    .then((myself) => {
      console.log(myself)
      if (!myself.preferences.city && !myself.preferences.gender) {
        User.find({ isTrainer: true })
          .then((trainerList) => {
            res.status(200);
            console.log(trainerList)
            return res.json(trainerList);

          })
          .catch(next)
      }
      if (myself.preferences.gender == "Doesnt matter")
        User.find({ "preferences.city": myself.preferences.city })
          .then((arrayOfUsersAndTrainers) => {
            const arrayOfTrainers = arrayOfUsersAndTrainers.filter((user) => {
              console.log(arrayOfUsersAndTrainers)
              return user.isTrainer
            })
            res.status(200);
            res.json(arrayOfTrainers)
          })




      User.find({ "preferences.city": myself.preferences.city, "preferences.gender": myself.preferences.gender })
        .then((arrayOfUsersAndTrainers) => {
          const arrayOfTrainers = arrayOfUsersAndTrainers.filter((user) => {
            console.log(arrayOfUsersAndTrainers)
            return user.isTrainer
          })
          res.status(200);
          res.json(arrayOfTrainers)
        })
    })
})


router.get('/:id', (req, res, next) => {
  const { id } = req.params;

  User.findById(id)
    .then((trainer) => {
      res.status(200);
      res.json(trainer);
    })
    .catch(next)
});

router.post('/:id/follow', (req, res, next) => {
  const trainerId = req.params.id;
  console.log(trainerId)
  let trainerName;
  let trainer = {};
  // cannot add yourself

  // can not add many times
  User.findById(req.session.currentUser._id)
    .then(user => {
      const isInArray = user.savedtrainers.some((savedTrainerId) => {
        return savedTrainerId.equals(trainerId);
      });
      if(!isInArray){
        user.savedtrainers.push(ObjectId(trainerId));
        user.save()
          .then((user) => {
            req.session.currentUser = user;
            res.status(200);
            res.json(user);
          })
          .catch(err => {
            console.log(err);
          })
      }
      else{
        res.json({user, isInArray});
        console.log('already saved');
      }
    })
    .catch(next);

});

// console.log('lets save trainer: ', user)
//           user.savedtrainers.push(trainerId);
//           user.save()
//           .then((result)=>{
//             console.log(result)
//           })
//           .catch(next)















/*
router.post('/phones', (req, res, next) => {
  const { brand, model, specs, image } = req.body;

  const newPhone = new Phone({
    brand,
    model,
    specs: specs || [],
    image,
  });
  
  newPhone.save()
  .then((phone)=> {
    res.status(200)
    res.json({phone: newPhone})
  })
  .catch(next)
});
*/

/*
router.put('/phones/:id', (req, res, next) => {
  const { id } = req.params;
  const { brand, model, specs, image } = req.body;
  const phoneToUpdate = {
    brand,
    model,
    specs,
    image,
  };

  Phone.findByIdAndUpdate(id, phoneToUpdate)
    .then((phone) => {
      res.status(200);
      res.json({ 
        message: "updated",
        phone: phone });
    })
    .catch(next)
});

router.delete('/phones/:id', (req, res, next) => {
  const { id } = req.params;

  Phone.findByIdAndDelete(id)
    .then((phone) => {
      res.status(200);
      res.json({ 
        message: "deleted",
        phone: phone });
    })
    .catch(next)

});
*/
module.exports = router;


/*

User.findById(req.session.currentUser._id)
  .then((myself) => {
    User.find( { "preferences.city": myself.preferences.city})
      .then((arrayOfUsersAndTrainers) => {
          arrayOfUsersAndTrainers.preferences.goals.forEach(goal =>{
            if(goal == myself.preferences.goals){
              const arrayOfTrainers = arrayOfUsersAndTrainers.filter((user) => {
                console.log(arrayOfUsersAndTrainers)
                return user.isTrainer 
            }
          })
        })
        res.status(200);
        res.json(arrayOfTrainers)
      })
  })

  */