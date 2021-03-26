import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const { MONGO_URI } = process.env;

mongoose
  .connect(
    'mongodb+srv://abiodundev10620:Abiodun96@cluster0.xbvl0.mongodb.net/grazacInvestmentDB?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log('Database connected successful'))
  .catch(err => console.log(err));

const app = express();

app.use(express.json());

const port = process.env.PORT || 2020;

app.listen(port, () => {
  console.log(`The app is running on PORT ${port}`);
});
