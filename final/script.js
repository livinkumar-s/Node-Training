import express from "express"
import mongoose from "mongoose"
import dotent from "dotenv"
import authRouter from "./routers/authRouter.js"
import notesRouter from "./routers/notesRouter.js"

dotent.config()


mongoose.connect(process.env.MONGODB_STRING).then(() => {
    console.log("DB Connected Successfully");
}).catch((err) => {
    console.log(err)
})

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/",(req,res)=>{
    res.status(200).json({message:"API is running!"})
})
// req Handling 
app.use("/api/auth", authRouter)
app.use("/api/notes",notesRouter)

app.listen(3333, () => {
    console.log("Listening on 3333")
})