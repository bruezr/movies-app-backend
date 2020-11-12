const express = require('express');
const moviesRoutes = require('./routes/movie');
const mongoose = require('mongoose');
const app = express();

require('dotenv').config({ path: __dirname + '/.env' });

app.use(express.json());

app.use('/', moviesRoutes);

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode;
  const message = error.message;
  res.status(status).json({
    message: message,
  });
});

const databaseUser = process.env.MONGO_USER;
const databasePsw = process.env.MONGO_PASSWORD;
const databaseName = process.env.MONGO_DATABASE;

mongoose
  .connect(
    `mongodb+srv://${databaseUser}:${databasePsw}@cluster0.gubwk.azure.mongodb.net/${databaseName}`,
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
  )
  .then(() => {
    app.listen(process.env.PORT || 3000);
  })
  .catch((err) => console.log(err));
