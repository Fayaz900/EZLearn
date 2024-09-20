import express from "express"
import dotenv from 'dotenv'
import { connectDB } from "./config/db.js";

dotenv.config()

const app = express()
app.use(express.json())
const port = process.env.PORT;

app.get('/',(req,res)=>{
    res.send("Server is Working")
})

// importing routes
import userRoutes from './routes/userRoutes.js'
// using routes
app.use("/api",userRoutes)

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
    connectDB()
})