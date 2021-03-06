const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

//[{ type: Schema.Types.ObjectId, ref: 'User' }],
const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  photoUrl: String,
  desciption: String,
  savedtrainers: [{
    type: ObjectId,
    ref: 'User'
  }],
  preferences: {
    city: String,
    online: Boolean,
    goals: Array,
    gender: String,
    price: String,
    profession: String,
    active: String,
    age: String,
    styles: String
},
  isTrainer: Boolean,
  videoUrl: Array


}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;


