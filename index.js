const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const app = express();

// client ID 17044488995-hdstn0tuuirojhqk3amvu8nd6sh74ben.apps.googleusercontent.com
// client secret n2atmjryE-aTEEjpKz4MfzmQ

app.get('/', (req, res) => {
    res.send({hi: 'there! this is my first web app!'});
})

PORT = process.env.PORT || 5000
app.listen(PORT)