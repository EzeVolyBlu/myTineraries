const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
    },
    
})

//name of module is the singular version (city) of the database name (cities)
module.exports = mongoose.model('user', userSchema)