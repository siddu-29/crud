const express=require("express")
const mongodb=require("mongodb")
const mongoose=require("mongoose")
const studentrouter=require("./routes/students")
const cors=require('cors')

const uri="mongodb://localhost:27017/CRUD"
//const uri="mongodb://localhost:27020,localhost:27021,localhost:27022/cbitit?replicaSet=m101";
const port =3000
const app=express()
mongoose.connect(uri)
app.use(express.json())
const con=mongoose.connection
con.on("open",()=>{
    console.log("db connected")
})
app.use(cors())
app.use(express.json())
app.use("/student",studentrouter)



app.listen(port,()=>{
    console.log("started")
})