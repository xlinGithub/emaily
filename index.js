const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/users');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();
require("./routes/authRoutes")(app);

app.get('/', (req, res) => {
    res.send({hi: 'there! this is my first web app!'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);