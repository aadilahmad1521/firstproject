import express from "express";

const PORT = 9000;
const app = express();


app.get("/",(req,res)=>{
    res.send("create api here")
})

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})