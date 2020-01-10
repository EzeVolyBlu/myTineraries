const GoogleStrategy = require('passport-google-oauth20').Strategy;
const key = require('../keys');

const userModel = require('../model/userModel');
const passport = require ('passport')



module.exports = passport.use(new GoogleStrategy({
    clientID: key.GOOGLE_CLIENT_ID,
    clientSecret: key.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/users/auth/google/callback"
  },
  async (accessToken, refreshToken, profile,  cb) => {

    try{

      console.log('profile._json',profile._json);
      
        const userExists = await userModel.findOne({ email: profile._json.email });

        if(!userExists){


            //create user
            console.log('create user')
            const newUser = new userModel ({ 
              name: profile._json.name, 
              email: profile._json.email, 
              avatar: profile._json.avatar, 
              password: profile._json.sub });
            
            await newUser.save();
            return cb(null, newUser)
      
          }else {

            return cb(null, userExists);

          }
    }catch(err){

        console.log("error ?");
        return cb(err, null);


    }


    
  }
));
