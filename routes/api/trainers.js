const express = require('express');
const router = express.Router();
const User = require('../../models/user');

router.get('/', (req, res, next) => {

  //const pref = {$or: [{isTrainer = true}, {}]}
  //const pref = {isTrainer = true}

  User.find({})
    .then((trainerList) => {
      res.status(200);
      res.json(trainerList);
    })
    .catch(next)

});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;

  User.findById(id)
    .then((trainer) => {
      res.status(200);
      res.json(trainer);
    })
    .catch(next)
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