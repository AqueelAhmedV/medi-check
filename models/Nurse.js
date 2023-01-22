const mongoose  = require('mongoose')
const Schema = mongoose.Schema;
const Patient = require('./Patient')

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        default: "01-01-1980"
    },
    patients: {
        type: [Patient],
        default: []
    }

})

module.exports = Nurse = mongoose.model('nurse', NurseSchema)