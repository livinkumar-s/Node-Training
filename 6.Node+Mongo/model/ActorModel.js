import mongoose from "mongoose";

const actorSchema = new mongoose.Schema({
    name: String,
    age: Number,
    noOfMovies: Number
})



const ActorModel = mongoose.model("actor", actorSchema)
export default ActorModel