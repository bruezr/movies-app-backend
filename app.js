const express = require('express');
const moviesRoutes = require('./routes/movie');
const mongoose = require('mongoose');
const app = express();

require('dotenv').config({ path: __dirname + '/.env' });

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/api', moviesRoutes);

app.use('/', (req, res, next) => {
  try {
    res
      .status(404)
      .send(
        'Hola, por favor chequear documentación en https://github.com/bruezr/movies-app-backend'
      );
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
});

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
