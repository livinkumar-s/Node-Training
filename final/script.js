import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"
import authRouter from "./routers/authRouter.js"
import notesRouter from "./routers/notesRouter.js"

dotenv.config()

const app = express()

app.use(cors({
    origin:["http://localhost:5500"],
    credentials:true
}))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose.connect(process.env.MONGODB_STRING)
.then(() => {
    console.log("DB Connected Successfully")
})
.catch((err) => {
    console.log(err)
})

app.get("/", (req, res) => {
    res.status(200).json({
        message: "API is running!"
    })
})

app.use("/api/auth", authRouter)
app.use("/api/notes", notesRouter)
const PORT = process.env.PORT || 3333;
const server = app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📚 API Documentation: http://localhost:${PORT}/api`);
    console.log(`🔍 Health Check: http://localhost:${PORT}/health`);
});

// IMPORTANT FOR VERCEL
export default app