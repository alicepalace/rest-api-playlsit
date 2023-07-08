const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create geolocation schema
const GeoSchema = new Schema({
    type: {
        type: String,
        default: "Point"
    },
    coordinates: {
        type: [Number],
        index: "2dsphere"
    }
});

// create bebe Schema and model
const BebeSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    state: {
        type: String
    },
    available: {
        type: Boolean,
        default: false
    },
    geometry: GeoSchema
});

const Bebe = mongoose.model('bebe', BebeSchema);

module.exports = Bebe;