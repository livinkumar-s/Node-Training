import mongoose from "mongoose";

const actorSchema = new mongoose.Schema({
    name: String,
    age: Number,
    noOfMovies: Number
},{
    timestamps:true
})



const ActorModel = mongoose.model("actor", actorSchema)
export default ActorModel