const express = require('express')
const router = express.Router()

const userModel = require('../model/userModel')

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

module.exports = router
