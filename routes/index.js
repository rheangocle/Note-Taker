const express = require('express');
const notesRouter = require('./notes');

//init express
const app = express();

//to use router
app.use('/notes', notesRouter);

module.exports = app;