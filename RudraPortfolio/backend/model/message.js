const mongoose= require('mongoose');

const MessageSchema=new mongoose.Schema({
    name:String,
    email:String,
    contactNumber:String,
    address:String,
    message:String,
    purpose:{
        type:String,
        enum:['Hier','Project','Referral'],
    },
    photo:String,
    resume:String,
    projectDoc:String
},{timestamps:true});

module.exports=mongoose.model('Message',MessageSchema);