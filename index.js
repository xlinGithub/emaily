const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

app.get('/', (req, res) => {
    res.send({hi: 'there! this is my first web app!'});
});

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID, 
    clientSecret: keys.googleClientSecret, 
    callbackURL: 'google/callback'
}, (accessToken) => {
    console.log(accessToken);
}));

app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

app.get('/auth/google/callback', passport.authenticate('google'));

PORT = process.env.PORT || 5000;
app.listen(PORT);