import express from "express"
import dotenv from 'dotenv'
import { connectDB } from "./config/db.js";

dotenv.config()

const app = express()
const port = process.env.PORT;

app.get('/',(req,res)=>{
    res.send("Server is Working")
})

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
    connectDB()
})