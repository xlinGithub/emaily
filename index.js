const express = require('express');
require('./services/passport');

const app = express();
require("./routes/authRoutes")(app);

app.get('/', (req, res) => {
    res.send({hi: 'there! this is my first web app!'});
});

<<<<<<< HEAD
PORT = process.env.PORT || 5000;
=======
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID, 
    clientSecret: keys.googleClientSecret, 
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    console.log('access token', accessToken);
    console.log('refresh token', refreshToken);
    console.log('profile', profile);
}));

app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

app.get('/auth/google/callback', passport.authenticate('google'));

const PORT = process.env.PORT || 5000;
>>>>>>> 05eb1a2428bb872b962eb33ea9a60ff06698e407
app.listen(PORT);