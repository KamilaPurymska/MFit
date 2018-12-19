const mongoose = require('mongoose');
const User = require('../models/user');
require('dotenv').config();

const bcrypt = require('bcrypt');
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

mongoose.connect(process.env.MONGODB_URI, {
  keepAlive: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE
});

const users = [
  
  {
  username: 'Ewa Chodakowska',
  password: bcrypt.hashSync('1234', salt),
  email: 'ew@ew.pl',
  photoUrl: 'https://static.wirtualnemedia.pl/media/top/ewachodakowska2018-655.png',
  desciption: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  preferences: {
    city: 'Warsaw',
    online: true,
    goals: ['Lose weight', 'Be healthier and feel better'],
    gender: 'Female',
    price: 80,
    profession: 'Professional',
    styles: 'A Supportive, Nurturing Coach'
},
  isTrainer: true,
  videoUrl: ['https://www.youtube.com/embed/3tJrKb7vXuc', 'https://www.youtube.com/embed/XYN0kRJFDCQ', 'https://www.youtube.com/embed/hCsshQynUWA']
},

{
  username: 'Anna Lewandowska',
  password: bcrypt.hashSync('1234', salt),
  email: 'al@al.pl',
  photoUrl: 'https://poradyfit.pl/wp-content/uploads/2018/04/10872378_913233538686714_2025847222_n.jpg',
  desciption: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  preferences: {
    city: 'Warsaw',
    online: false,
    goals: ['Lose weight', 'Get stronger', 'Be healthier and feel better'],
    gender: 'Female',
    price: 100,
    profession: 'Nutrision',
    styles: 'A Supportive, Nurturing Coach'
},
  isTrainer: true,
  videoUrl: []
},

{
  username: 'Kayla Itsines',
  password: bcrypt.hashSync('1234', salt),
  email: 'kl@kl.com',
  photoUrl: 'https://s.hdnux.com/photos/73/61/05/15667542/3/rawImage.jpg',
  desciption: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  preferences: {
    city: 'Syndey',
    online: true,
    goals: ['Lose weight', 'Get stronger', 'Be healthier and feel better'],
    gender: 'Female',
    price: 200,
    profession: 'personal trainer',
    styles: 'A Supportive, Nurturing Coach'
},
  isTrainer: true,
  videoUrl: []
},

{
  username: 'Mel B',
  password: bcrypt.hashSync('1234', salt),
  email: 'ml@ml.com',
  photoUrl: 'http://www.hersweat.com/wp-content/uploads/2015/08/mel-b-fitness-main-her-sweat.jpg',
  desciption: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  preferences: {
    city: 'New York',
    online: true,
    goals: ['Lose weight'],
    gender: 'Female',
    price: 0,
    profession: 'personal trainer',
    styles: 'An Educator or Teacher'
},
  isTrainer: true,
  videoUrl: []
},

{
  username: 'Rodrigo Gracia',
  password: bcrypt.hashSync('1234', salt),
  email: 'rg@ml.com',
  photoUrl: 'https://static1.squarespace.com/static/543e9a68e4b0bed3afbae5c7/t/5a25a6a9ec212df47ee5b4ab/1521062308088/Lee+Constantinou+Personal+Trainer+at+Blueprint+Fitness%2C+training+clients+in+Finchley%2C+Whetstone+and+Barnet?format=2500w',
  desciption: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  preferences: {
    city: 'Barcelona',
    online: true,
    goals: ['Lose weight', 'Get stronger', 'Be healthier and feel better'],
    gender: 'Male',
    price: 50,
    profession: 'personal trainer',
    styles: 'An Educator or Teacher'
},
  isTrainer: true,
  videoUrl: []
},

{
  username: 'Alex Lopez',
  password: bcrypt.hashSync('1234', salt),
  email: 'rg@ml.com',
  photoUrl: 'http://www.musclemindmotivation.com/wp-content/uploads/2018/02/health-5a83311b253d5-5a83315234ff1.jpeg',
  desciption: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  preferences: {
    city: 'Barcelona',
    online: true,
    goals: ['Lose weight', 'Get stronger', 'Be healthier and feel better'],
    gender: 'Male',
    price: 80,
    profession: 'personal trainer',
    styles: 'A Supportive, Nurturing Coach'
},
  isTrainer: true,
  videoUrl: []
},

{
  username: 'Lidia Lopez',
  password: bcrypt.hashSync('1234', salt),
  email: 'rg@ml.com',
  photoUrl: 'https://marketplace.canva.com/MAB-2SkMITM/1/thumbnail_large/canva-fitness-model-in-sportswear-MAB-2SkMITM.jpg',
  preferences: {
    city: 'Barcelona',
    online: true,
    goals: ['Lose weight','Be healthier and feel better'],
    gender: 'Female',
    price: 100,
    profession: 'personal trainer',
    styles: 'An Educator or Teacher'
},
  isTrainer: true,
  videoUrl: []
},

]

User.create(users)
.then(() => {
  mongoose.connection.close();
})
.catch(error => {
  console.error(error);
});
 