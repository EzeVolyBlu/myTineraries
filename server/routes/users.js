// http://localhost:5000/users/auth/google/callback

const express = require('express')
const router = express.Router()
const key = require("../keys").secretOrKey;
const jwt = require("jsonwebtoken");
const passport = require ('passport')
const googlePassport = require('../auth/google-passport.js');



const { userValidationRules, validate } = require('./validator.js')

const userModel = require('../model/userModel')


router.get('/all', async (req, res) => {
    try{

        const users = await userModel.find({});
        res.send({users})
    }catch(e){
        res.send(e)
    }
})


/*get city*/
router.get('/:userId',
    (req, res) => {
        let userId = req.params.userId;
        userModel.findById(userId)
            .then(user => {
                res.send(user)
            })
            .catch(err => res.send(err));
    });


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

router.get('/',
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {

        const user = await userModel.findById(req.user.id);
        if(user){
            res.send({
                user,
                success: true
            })
        }else{
            res.send({
                success: false,
                error: 'User does not exist'
            })
        }
    }
  );


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
