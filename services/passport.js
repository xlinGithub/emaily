const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const user = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});
passport.deserializeUser((id, done) => {
    user.findById(id)
        .then(user => {
            done(null, user.id);
        })
});

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID, 
    clientSecret: keys.googleClientSecret, 
    callbackURL: '/auth/google/callback',
    proxy: true,
}, async (accessToken, refreshToken, profile, done) => {
    // console.log(accessToken);
    // console.log(refreshToken);
    console.log(profile.id);
    const existingUser = await user.findOne({ googleId: profile.id})
    if (existingUser) {
        return done(null, existingUser);
    }
    const newUser = await new user({ googleId: profile.id }).save()
    done(null, newUser);
}));