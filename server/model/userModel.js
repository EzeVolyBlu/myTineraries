
const bcrypt = require('bcryptjs')
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    avatar: {
        type: String,
        required: true,

    },
    
    email: {
        type: String,
        required: true,

    },
    password: {
        type: String,
        required: true,

    },
})


userSchema.methods.encryptPassword = async password => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
  }
  
  userSchema.methods.decryptPassword = function (password) {
    return bcrypt.compare(password, this.password);
  }    

//name of module is the singular version (city) of the database name (cities)
module.exports = mongoose.model('user', userSchema)