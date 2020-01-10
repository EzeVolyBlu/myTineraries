const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const passport = require('passport')
// const mongoose = require("mongoose");
// const User = mongoose.model("user");
const userModel = require('../model/userModel')

const key = require('../keys');
console.log('passport works', key.secretOrKey)
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey= key.secretOrKey

module.exports = passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      console.log("find by id" + jwt_payload.id);

        userModel.findById(jwt_payload.id)
        .then(user => {

          console.log('user',user)
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );;