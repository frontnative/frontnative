const mongoose = require('mongoose');
const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        min: 2,
        max: 255
    },
    email: {
        type: String,
        require: true,
        min: 4,
        max: 255
    },
    password: {
        type: String,
        require: true,
        min: 6,
        max: 1024
    },
    phone: {
        type: String,
        require: false
    },
    country: {
        type: String,
        require: false
    }
});

module.exports = mongoose.model('Users', usersSchema);
