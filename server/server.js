const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const db = require('./keys').mongoURI;
const mongoose = require("mongoose");


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

//Port listening
app.listen(port, () => {
  console.log("Server is running on " + port + " port");
});

//Routes
app.use('/cities', require('./routes/cities'));

mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log('Connection to Mongo DB established'))
  .catch(err => console.log(err));
