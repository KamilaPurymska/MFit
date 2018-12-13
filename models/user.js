const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  desciption: String,
  savedtrainers: ObjectId,
  preferences: {
    city: String,
    online: Boolean,
    goals: Array,
    gender: Array,
    price: String,
    profession: String,
},
  isTrainer: Boolean,
  videoId: String


}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;