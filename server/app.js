const express=require("express")
const mongodb=require("mongodb")
const mongoose=require("mongoose")
const studentrouter=require("./routes/students")

const uri="mongodb://localhost:27017/CRUD"
const port =3000
const app=express()
mongoose.connect(uri)
app.use(express.json())
const con=mongoose.connection
con.on("open",()=>{
    console.log("db connected")
})
app.use("/student",studentrouter)



app.listen(port,()=>{
    console.log("started")
})