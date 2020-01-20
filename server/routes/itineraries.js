
const passport = require('passport')
const express = require('express')
const router = express.Router()

const itineraryModel = require('../model/itineraryModel')
const userModel = require('../model/userModel')

/*get city*/
router.get('/:id',
    (req, res) => {
        let cityId = req.params.id;
        itineraryModel.find({cityId})
            .then(itineraries => {
                res.send(itineraries)
            })
            .catch(err => res.send(err));
    });

router.get('/',
    (req, res) => {
        // console.log(req.header);
        console.log(req.headers);
        res.send(req.headers.itineraryid)
    });



//router.get('/',
//     passport.authenticate("jwt", { session: false }),
//     async (req, res) => {

//         try {

//             const user = await userModel.findById(req.user.id)
//             res.json({
//                 user,
//                 success: true
//             });

//         } catch (error) {
//             res.status(404).json({
//                 error
//             })
//         }
//     }
// );











router.post('/favourites', 
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {

        console.log('req.head.fav',req.headers.favourite);
        

        const { favourite}  = req.headers 
        const user = await userModel.findById(req.user._id)
        
        const favourites = user.favourites
        favourites.push(favourite);

        await user.updateOne({
            favourites
        })

        console.log('user',user);


        res.send({
            success: true
        })

}) 

router.delete('/favourites', 
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
        const {favourite} = req.headers 
        const user = await userModel.findById(req.user._id)
        
        const favourites = user.favourites
        favourites.splice(favourites.indexOf(favourite), 1);

        // list.splice( list.indexOf('foo'), 1 );


        await user.updateOne({
            favourites
        })

        console.log('user',user);
        
        res.send({
            success: true
        })

}) 


module.exports = router
