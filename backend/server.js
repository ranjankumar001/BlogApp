const express=require('express')
const app=express()
const port=process.env.port || 5000
require('dotenv').config()
const mongoose=require('mongoose')
const cors=require('cors')
const postRouter=require('./Posts')

app.use(express.json())
app.use(cors())

app.use('/post',postRouter)

mongoose.connect(process.env.URL,{useNewUrlParser:true,useUnifiedTopology:true},()=>{
    console.log("Database connected!!!!!")
})

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});

