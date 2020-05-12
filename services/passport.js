const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const user = mongoose.model('users');

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID, 
    clientSecret: keys.googleClientSecret, 
    callbackURL: '/auth/google/callback',
}, (accessToken, refreshToken, profile, done) => {
    console.log(accessToken);
    console.log(refreshToken);
    console.log(profile);
    user.findOne({ googleId: profile.id})
        .then((existingUser) => {
            if (existingUser) {

            } else {
                new user({ googleId: profile.id }).save();
            }
        })
}));