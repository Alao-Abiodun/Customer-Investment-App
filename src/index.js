import express from 'express';

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 2020;

app.listen(PORT, () => {
  console.log(`The app is running on PORT ${PORT}`);
});
