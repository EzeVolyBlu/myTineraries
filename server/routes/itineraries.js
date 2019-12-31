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

module.exports = router
