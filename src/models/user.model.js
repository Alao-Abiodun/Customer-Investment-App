import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  investors: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Investor',
  },
});

const userModel = mongoose.model('User', userSchema);

export default userModel;
