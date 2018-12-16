const express = require('express');
const router = express.Router();
const User = require('../../models/user');

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
    User.find( { "preferences.city": myself.preferences.city})
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

/*
  User.find({isTrainer: true})
  .then((trainerList) => {
    trainerList.forEach(trainer =>{
    let trainersObject = {}
    if (trainer.preferences.city == req.session.currentUser.preferences.city){
      trainersObject = trainersObject.trainer
    }
    console.log(trainersObject)
    console.log(trainerList)
    res.status(200);
    res.json(trainersArray);
    })
  })
  .catch(next)

  });

*/

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
  let trainerName;
  let trainer = {};
  // cannot add yourself
  if (trainerId === req.session.currentUser._id) {
    return res.redirect('/trainers');
  };
  User.findById(req.session.currentUser._id)
    .then(result => {
      result.savedtrainers.forEach(trainer => {
        if (trainer === trainerId) {
          return res.redirect('/trainers');
        }
      });
    })
    .catch(next);

  User.findById(trainerId)
    .then(result => {
      trainerName = result.username;
      trainer = {
        trainerId,
        trainerName
      };
      User.findByIdAndUpdate(req.session.currentUser._id, { $push: { savedtrainers: trainer } })
        .then(() => {
          res.redirect('/trainers');
        })
        .catch(next);
    })
    .catch(next);
});















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