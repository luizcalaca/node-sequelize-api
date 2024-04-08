const express = require('express');
require('express-async-errors');
const errorMiddleware = require('./middlewares/error');
const courseRoutes = require('./routes/courseRoutes');
const studentRoutes = require('./routes/studentRoutes');

const app = express();

app.use(express.json());

app.use('/course', courseRoutes);
app.use('/student', studentRoutes);

app.use(errorMiddleware);

module.exports = app;