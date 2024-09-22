import express from "express"
import dotenv from 'dotenv'
import { connectDB } from "./config/db.js";
import cors from 'cors'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

const port = process.env.PORT;

app.get('/',(req,res)=>{
    res.send("Server is Working")
})
app.use("/uploads",express.static("uploads"))

// importing routes
import userRoutes from './routes/userRoutes.js'
import coursesRoutes from './routes/coursesRoutes.js'
import adminRoutes from './routes/adminRoutes.js'

// using routes
app.use("/api",userRoutes)
app.use("/api",coursesRoutes)
app.use("/api",adminRoutes)

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
    connectDB()
})