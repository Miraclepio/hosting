const mongoose =require('mongoose')
const express=require('express')
const fileUpload=require('express-fileupload')
require('dotenv').config();
const port=process.env.port
const router=require('./route/schoolRoute')



const app=express()
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));
app.use("/api/v1",router)
app.use(express.json())
app.listen(port,()=>{
    console.log(`app is up and running on port:${port}`)
})
mongoose.connect(process.env.db).then(()=>{
    console.log('connected to the Database')
}).catch((err)=>{
    console(err.message)
}) 