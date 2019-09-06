const mongoose = require('mongoose');
const usersSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true,
        min: 2,
        max: 255
    },
    lastName: {
        type: String,
        require: true,
        min: 2,
        max: 255
    },
    male: {
        type: String,
        require: false
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
        require: true
    },
    country: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: false
    }
});

module.exports = mongoose.model('Users', usersSchema);
