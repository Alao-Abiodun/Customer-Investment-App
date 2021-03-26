import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

import userRoute from './routes/user.route';
import investorRoute from './routes/investor.route';

mongoose
  .connect(
    'mongodb+srv://abiodundev10620:Abiodun96@cluster0.xbvl0.mongodb.net/grazacInvestmentDB?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log('Database connected successful'))
  .catch(err => console.log(err));

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Application');
});

app.use('/api/v1', userRoute);
app.use('/api/v1', investorRoute);

const port = process.env.PORT || 2020;

app.listen(port, () => {
  console.log(`The app is running on PORT ${port}`);
});
