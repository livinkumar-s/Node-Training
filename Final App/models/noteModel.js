import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    title: String,
    content: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
}, {
    timestamps: true
})

const notesModel = mongoose.model("Notes", noteSchema)
export default notesModel;