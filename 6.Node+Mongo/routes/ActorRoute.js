import express from "express"
const Router = express.Router()
import { getAllActors, addActor, deleteActor, getActorWithId } from "../controller/ActorController.js"

Router.get("/actors", getAllActors)
Router.get("/actor/:id", getActorWithId)
Router.post("/actor", addActor)
// Router.update("/actor/:id",updateActor)
Router.delete("/actor/:id", deleteActor)

export default Router