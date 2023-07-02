const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create ninja Schema and model
const BebeSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    rank: {
        type: String
    },
    available: {
        type: Boolean,
        default: false
    }
    // add in geo location
});

const Bebe = mongoose.model('bebe', BebeSchema);

module.exports = Bebe;