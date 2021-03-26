import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const investorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  startdate: {
    type: Date,
    required: true,
  },
  enddate: {
    type: Date,
    required: true,
  },
  reference: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

const investmentModel = mongoose.model('Investor', investorSchema);
export default investmentModel;
