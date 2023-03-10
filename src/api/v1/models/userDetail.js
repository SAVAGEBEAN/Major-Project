const mongoose = require('mongoose');

const userDetailSchema = mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    authenticate : {
        type : Boolean,
        default : false
    },
    folderaccess : {
        type : Boolean,
        default : false
    },
    upload : {
        type : Boolean,
        default : false
    },
    review : {
        type : Boolean,
        default : false
    }
})

module.exports = mongoose.model('userDetail', userDetailSchema);