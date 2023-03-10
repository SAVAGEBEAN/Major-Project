const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    admin : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true 
    },
    username : {
        type : String,
        required : true,
        min : 6,
        max : 20
    },
    password : {
        type : String,
        required : true,
    },
    date : {
        type : Date,
        default : Date.now
    }
    
});

module.exports = mongoose.model('User', UserSchema);