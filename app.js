// app.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const movieRoutes = require('./routes/movieRoutes.js');
require('dotenv').config(); 

const app = express();

const port = process.env.PORT || 3000;


mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//Route
app.use('/api', movieRoutes);


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port} This is second branch`);
});

// This is comment one
// This is comment second

// This is another commit one
// This is Another commit second


// This is Last one
// This is Last Second one

// Last Checking
