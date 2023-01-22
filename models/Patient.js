const mongoose  = require('mongoose')
const Schema = mongoose.Schema;
const Nurse = require('./Nurse')

const PatientSchema = new Schema({
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
    nurse: {
        type: Nurse,
        default: true
    } 
})

module.exports = Patient = mongoose.model('patient', PatientSchema)