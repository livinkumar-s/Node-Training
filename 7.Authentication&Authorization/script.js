import express from "express"
import mongoose from "mongoose"
import dotent from "dotenv"
import authRouter from "./routers/authRouter.js"

dotent.config()


mongoose.connect(process.env.MONGODB_STRING).then(() => {
    console.log("DB Connected Successfully");
}).catch((err) => {
    console.log(err)
})

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// req Handling 
app.use("/api/auth", authRouter)

app.listen(3333, () => {
    console.log("Listening on 3333")
})