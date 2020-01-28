const mongoose = require('mongoose')

const tokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        // unique: true
    },
    
})

//name of module is the singular version (city) of the database name (cities)
module.exports = mongoose.model('black-List-Token', tokenSchema)