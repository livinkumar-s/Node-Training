import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import authRouter from "./routers/authRouter.js"
import notesRouter from "./routers/notesRouter.js"

dotenv.config()

const app = express()

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

// IMPORTANT FOR VERCEL
export default app