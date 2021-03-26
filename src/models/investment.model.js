import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const investorSchema = new Schema({
  amount: {
    type: number,
    required: true,
  },
  transaction: {
    type: number,
    required: true,
  },
  Investor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

const investmentModel = mongoose.model('Investor', investorSchema);
export default investmentModel;
