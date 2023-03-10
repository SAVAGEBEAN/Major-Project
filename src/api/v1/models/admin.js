const mongoose = require('mongoose');

const AdminSchema = mongoose.Schema({
    admin : {
        type : String,
        required : true,
        min : 6,
        max : 20
    },
    email : {
        type : String,
        required : true,
        min : 6,
        max : 255
    },
    password : {
        type : String,
        required : true
     
    },
    date : {
        type : Date,
        default : Date.now,
    }
});
module.exports = mongoose.model('Admin',AdminSchema);