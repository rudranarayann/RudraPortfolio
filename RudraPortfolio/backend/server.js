const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const path=require('path');
require('dotenv').config();


const app=express();
const PORT=process.env.PORT||6500;

app.use(cors());
app.use(express.json());
app.use('/uploads',express.static(path.join(__dirname,'uploads')));

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log('MongoDB connected Sucessfully....');
    
}).catch((err)=>{
    console.error('MongoDb connection error: ',err);
    
});


const messageRoutes=require('./routes/messageRoute');
app.use('/api/message',messageRoutes);

app.get('/',(req,res)=>{
    res.send('API is running...')
});

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
    
});