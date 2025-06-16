const express=require('express');
const router=express.Router();
const Message=require('../model/message');
const upload=require('../middileware/upload');

const cpUpload=upload.fields([
    {name:'photo',maxCount:1},
    {name:'resume',maxCount:1},
    {name:'projectDoc',maxCount:1}
]);

router.post('/',cpUpload,async (req,res)=>{
    try{
        const{name,email,contactNumber,address,message,purpose}=req.body;

        const newMessage=new Message({
            name,
            email,
            contactNumber,
            address,
            message,
            purpose,
            photo:req.files['photo']?req.files['photo'][0].filename:'',
            resume:req.files['resume']?req.files['resume'][0].filename:'',
            projectDoc:req.files['projectDoc']?req.files['projectDoc'][0].filename:''
        });
        await newMessage.save();
        res.status(200).json({message:'submitted successfully!'});
    }catch(err){
        res.status(500).json({error:'Submission field'});
    }
});

module.exports=router;