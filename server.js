const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const beds = require('./routes/beds');
const bedCt = require('./routes/bedCt');
const path = require('path');

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

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 4000

app.listen(port, function() {
    console.log(`listening on port ${port}`);
})