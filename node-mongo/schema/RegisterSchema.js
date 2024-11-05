const mongoose = require('mongoose')

const RegisterSchema = mongoose.Schema({

    userid: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    position: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required:true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    image: {
        type: Object,
        required:true
    }

})

module.exports = mongoose.model ('empregister', RegisterSchema)