// http://localhost:5000/users/auth/google/callback

const express = require('express')
const router = express.Router()
const key = require("../keys").secretOrKey;
const jwt = require("jsonwebtoken");
const passport = require ('passport')
const googlePassport = require('../auth/google-passport.js');
const tokenModel = require('../model/auth')

// const auth = require('../middleware/auth');

const { userValidationRules, validate } = require('./validator.js')
const userModel = require('../model/userModel')



router.get('/',
    passport.authenticate("jwt", { session: false }),
    (req, res) => {


        //agregar blacklist

      userModel
        .findOne({ _id: req.user.id })
        .then(user => {

          res.json({
              user,
            success: true
        });
        })
        .catch(err => res.status(404).json({ err }));
    }
  );


router.get('/auth/google', 
    passport.authenticate('google', { scope: ['profile','email'] })
    );

router.get('/auth/google/callback', 
    googlePassport.authenticate('google', { failureRedirect: '/login' , session: false}), 
    (req, res, next) => {
        // Successful authentication, redirect home.

        try {

            const payload = {
                id: req.user._id,
                userName: req.user.email
            }

            // const token = jwt.sign(payload, key.secretOrKey, {expiresIn: 1800})
    
    
            const token = jwt.sign(
                payload,
                key,
                {
                    expiresIn: '604800'
                }
            );

            res.redirect(`http://localhost:3000/user/profile/${token}`);

        }catch(error){
            console.log(error)
            // res.redirect(`http://localhost:3000/users/error`);
        }    
  });



router.get(`/token/:token`, async (req, res) =>{
    let token = req.params.token;
    
    try{
        const blackToken = await tokenModel.findOne({token});
        
        if(blackToken){
            res.send({
                status: 'Unauthorized. The Token is in the blackList'
            })
        }else {
            res.send({
                status: 'Access success'
            })
        }
        
    }catch(error){
        res.send({
            error
        })
    }
})



router.post(`/token/:token`, (req, res) =>{
    const newToken = new tokenModel({
        token: req.params.token
    })

    newToken.save().then(tk => {
        res.status(201).send(tk)
        })
        .catch(err => {
        res.status(500).send("Server error")}) 
})

router.post('/login', async (req, res) => {

    try {
        const userFound = await userModel.findOne({ email: req.body.email })
        if (!userFound) {
            res.send({
                success: false,
                message: "User doesn't exist"
            })

        } else {

            const matchPass = await userFound.decryptPassword(req.body.password);
            if (!matchPass) {
                res.send({
                    success: false,
                    message: 'Authentication error'
                })

            } else {

                const payload = {
                    id: userFound._id,
                    username: userFound.name,
                    avatarPicture: userFound.avatar
                };

                const options = { expiresIn: 2592000 };
                jwt.sign(
                    payload,
                    key,
                    options,
                    (error, token) => {
                        if (error) {

                            console.log(error)

                            res.send({
                                success: false,
                                error
                            });
                        } else {
                            res.send({
                                success: true,
                                token: token,
                            });
                        }
                    }
                );
            }
        }

    } catch (e) {
        console.log(e)

        res.send({ e })
    }
})


router.post('/', userValidationRules(), validate, async (req, res) => {

    try {
        let email = req.body.email
        const user = await userModel.find({ email })
        let userExists = (user.length > 0);



        if (userExists) {
            res.send({
                success: false,
                errors: [{
                    field: 'email',
                    msg: ' already exists'
                }]
            })
        } else {


            const { name, email, avatar } = req.body
            const newUser = new userModel({
                name,
                email,
                avatar
            })

            newUser.password = await newUser.encryptPassword(req.body.password)


            // newUser.password = await newUser.encryptPassword(newUser.password);
            await newUser.save()

        }



        res.send({
            success: true
        })


    } catch (e) {
        console.log(e)
        res.send(e)
    }


});


module.exports = router
