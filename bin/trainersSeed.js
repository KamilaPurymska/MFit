const mongoose = require('mongoose');
const User = require('../models/user');

const bcrypt = require('bcrypt');
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

mongoose.connect('mongodb://localhost/MFit', {
  keepAlive: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE
});

const users = [
  
  {
  username: 'Ewa Chodakowska',
  password: bcrypt.hashSync('1234', salt),
  email: 'ew@ew.pl',
  desciption: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  preferences: {
    city: 'Warsaw',
    online: true,
    goals: ['lose weight', 'get stronger'],
    gender: 'female',
    price: 80,
    proffesion: 'Professional',
},
  isTrainer: true,
  videoId: 'String'
},

{
  username: 'Anna Lewandowska',
  password: bcrypt.hashSync('1234', salt),
  email: 'al@al.pl',
  desciption: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  preferences: {
    city: 'Warsaw',
    online: false,
    goals: ['get stronger'],
    gender: 'female',
    price: 100,
    proffesion: 'Nutrision',
},
  isTrainer: true,
  videoId: 'String'
}

]

User.create(users)
.then(() => {
  mongoose.connection.close();
})
.catch(error => {
  console.error(error);
});
 