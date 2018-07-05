const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

// configuring google strategy in passport (OAuth)
// Authentication (check the user is genuine/authentic or not) and
// Authorization (giving access (permission) after auth passed)
passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => {
        console.log('access token :' + accessToken);
        console.log('refresh token :' + refreshToken);
        console.log('profile:' + profile);
    })
);