const dotenv = require('dotenv');
 
module.exports = {
        database : {
            connect :'mongodb+srv://KAV:KAV123456@cluster0.vuoad.mongodb.net/DLPS?retryWrites=true&w=majority'
        },
        authToken :{
            tokenSecret : 'onlyKKAVknowsit'
        }
}
