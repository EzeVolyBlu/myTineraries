const express = require('express')
const router = express.Router()

const cityModel = require('../model/cityModel')

router.get('/test', (req, res) => {
    res.send({ msg: 'Cities test route.' })
})

/*get all cities*/
router.get('/all',
    (req, res) => {
        cityModel.find({})
            .then(files => {
                res.send(files)
            })
            .catch(err => console.log(err));
    });


router.post('/', (req, res) => {
    const newCity = new cityModel({
        name: req.body.name,
        country: req.body.country,
        img: req.body.img
    })

    cityModel.find({name:newCity.name})
        .then(city => {
            
            console.log(city)

            if(city.length > 0){

                res.status(500).send("The city already exists");
                
            } else {

                newCity.save()
                .then(city => {
                res.status(201).send(city)
                })
                .catch(err => {
                res.status(500).send("Server error")}) 
            }
        }).catch(err => console.log(err));


    
});




module.exports = router