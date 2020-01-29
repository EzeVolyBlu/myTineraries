const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const db = require('./keys').mongoURI;
const mongoose = require("mongoose");
require ('./auth/passport');
const passport = require ('passport')


const distDir = __dirname + "/dist/";
app.use(express.static(distDir));

//Middlewares
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(cors());
app.use(passport.initialize());

//Port listening
app.listen(port, () => {
  console.log("Server is running on " + port + " port");
});

//Routes
app.use('/cities', require('./routes/cities'));
app.use('/itineraries', require('./routes/itineraries'));
app.use('/users', require('./routes/users'));

mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log('Connection to Mongo DB established'))
  .catch(err => console.log(err));
