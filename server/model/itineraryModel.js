const mongoose = require('mongoose')
var ObjectId = mongoose.Schema.Types.ObjectId;

const itinerarySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    rating: {
        type: Number,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    hashtags: {
        type: Array,
    },
    cityId: {
        type: ObjectId,
        required: true,
        unique: true
    },
    userId: {
        type: ObjectId,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('itinerary', itinerarySchema)