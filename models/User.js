const mongoose  = require('mongoose')
const Schema = mongoose.Schema;

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
    isPatient: {
        type: Boolean,
        default: true
    } 

})

module.exports = User = mongoose.model('users', UserSchema)