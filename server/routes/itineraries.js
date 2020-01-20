const express = require('express')
const router = express.Router()

const itineraryModel = require('../model/itineraryModel')

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

module.exports = router
