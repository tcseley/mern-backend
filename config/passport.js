require('dotenv').config();
const { Strategy, ExtractJwt } = require('passport-jwt');

// Model
const { User } = require('../models');

// Object made from Strategy
const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
}

const JWT_STRATEGY = new Strategy(options, async (jwtPayload, done) => {
    // Check for User by the ID
    try {
        const user = await User.findById(jwtPayload.id);

        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    } catch (error) {
        console.log('Error inside of passort.config');
        console.log(error);
    }
});

// export a function that wil be using Strategy
module.exports = async (passport) => {
    passport.use(JWT_STRATEGY);
}