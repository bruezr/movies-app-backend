const express = require('express');
const moviesRoutes = require('./routes/movie');
const app = express();

app.use(express.json());

app.use('/', moviesRoutes);

app.listen(3000);
