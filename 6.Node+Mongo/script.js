import express from "express"
import mongoose from "mongoose"
import ActorRouter from "./routes/ActorRoute.js"

mongoose.connect("mongodb://127.0.0.1:27017/actors").then(()=>{console.log("Connected with mongoDB")})
.catch((err)=>{console.log(err)})

const app = express()
app.use(express.json())


//req handlers
app.use("/actor",ActorRouter)


app.listen(3333, () => {
    console.log("Listening on 3333...!");
})