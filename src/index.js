const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const cg = require('./config/config.js');

const auth = require('./api/v1/routes/authenticationRoute.js');
const signupRoute = require('./api/v1/routes/signupRoute.js');
const userUpdate = require('./api/v1/routes/userUpdate.js');
const getInfo = require('./api/v1/routes/getInfo.js');
mongoose.set('strictQuery',false);
const db = async()=>{
    mongoose.connect(cg.database.connect,{useNewUrlParser : true},()=>{
        console.log('Connected to db');
    });  
    
}
db(); 

app.use(express.json()); app.use(express.urlencoded({extended: true}))

app.use('/login',auth);
app.post('/logout',(req,res)=>{
    res.cookie('auth-token' , '' , {maxAge : 0})
    res.status(200).send({message : "Logout success"})
});
app.use('/signup',signupRoute);
app.use('/info',getInfo);
app.use('/user',userUpdate);
app.listen(5000,()=>{
    console.log("Server Started");
});