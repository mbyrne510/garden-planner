const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const beds = require('./routes/beds');
const bedCt = require('./routes/bedCt');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE")
  next();
});

const db = require('./config/keys').mongoURI;
mongoose.connect(db)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.use('/beds', beds);
app.use('/bedCt', bedCt);


app.listen(4000, function() {
    console.log('listening on 4000');
})