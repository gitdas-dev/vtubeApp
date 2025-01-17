import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/users.js"
import videoRoutes from "./routes/videos.js"
import commentRoutes from "./routes/comments.js"
import authRoutes from "./routes/auth.js"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()
dotenv.config()

app.use(cors({
    origin: 'http://127.0.0.1:5173' // Allow your front-end address
}));

const connect = () => {
    mongoose.connect(process.env.MONGO_URL).then(() => {
        console.log("Connected to DB!");
        
    }).catch((err) => {
        throw err;
    })
}

app.use(cookieParser())
app.use(express.json())

app.use("/api/users", userRoutes)
app.use("/api/videos", videoRoutes)
app.use("/api/comments",commentRoutes)
app.use("/api/auth",authRoutes)

app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong!";
    return res.status(status).json({
        success: false,
        status,
        message
    })
})


app.listen(5000, () => {
    connect()
    console.log("Connected!");
}
)