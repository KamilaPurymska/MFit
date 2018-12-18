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
      // empty preferences
      if (!myself.preferences.city && !myself.preferences.gender && !myself.preferences.styles && myself.preferences.goals.length === 0) {
        User.find({ isTrainer: true })
          .then((trainerList) => {
            res.status(200);
            return res.json(trainerList);

          })
          .catch(next)
      }
      if (myself.preferences.gender == "Doesnt matter"){
        User.find({ "preferences.city": myself.preferences.city, "preferences.styles":myself.preferences.styles, "preferences.goals": {$all: myself.preferences.goals}})
          .then((arrayOfUsersAndTrainers) => {
            const arrayOfTrainers = arrayOfUsersAndTrainers.filter((user) => {
              return user.isTrainer
            })
            res.status(200).json(arrayOfTrainers)
          })
        }



      
      User.find({ "preferences.city": myself.preferences.city, "preferences.styles":myself.preferences.styles, "preferences.gender": myself.preferences.gender, "preferences.goals": {$all: myself.preferences.goals} })
        .then((arrayOfUsersAndTrainers) => {
          const arrayOfTrainers = arrayOfUsersAndTrainers.filter((user) => {
            console.log(arrayOfUsersAndTrainers)
            return user.isTrainer
          })
          res.status(200).json(arrayOfTrainers)
        })
    })
})


router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  if (!ObjectId.isValid(id)) {
    res.json({erros: 'not-id-valid'}).status(402);
  }
  User.findById(id)
    .then((trainer) => {
      if(!trainer) {
        res.json({error: 'not-found'}).status(404)
      }
      return User.findOne(req.session.currentUser)
      .then((user) => {
        if(!user) {
          res.json({error: 'not-found'}).status(404)
        }
        let isFollowing = false;
        for (let i = 0; i < user.savedtrainers.length; i++) {
          if (trainer._id.equals(user.savedtrainers[i])){
            isFollowing = true
          } 
        }
        if(isFollowing) {
          res.status(200).json({trainer, message: 'Unfollow'});
        } else {
          res.status(200).json({trainer, message: 'Follow'});
        }
      })
    })
    .catch(next)
});

router.post('/:id/follow', (req, res, next) => {
  const trainerId = req.params.id;
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
            res.status(200).json({message: 'Unfollow'});
          })
          .catch(err => {
            console.log(err);
          })
      } else {
        user.savedtrainers.pull(ObjectId(trainerId))
        user.save()
        .then((user) => {
          req.session.currentUser = user;
          res.status(200).json({message: 'Follow'});
        })
        .catch(err => {
        console.log(err); 
      })
    }
  })
  .catch(next);

})









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