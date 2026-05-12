import express from "express"
import verifyUser from "../vrifyUser.js"
import { createnote, getAllNotes, getNote } from "../controllers/notesController.js"

const Router = express.Router()

Router.post("/note", verifyUser, createnote)
Router.get("/allnotes", verifyUser, getAllNotes)
Router.get("/note/:id", verifyUser, getNote)


export default Router