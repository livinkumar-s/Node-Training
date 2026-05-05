import express from "express"
import { logIn, logOut, signUp } from "../controllers/authController.js"
import verifyUser from "../vrifyUser.js"

const Router = express.Router()


Router.post("/signup", signUp)
Router.post("/login", logIn)
Router.get("/logout", verifyUser,logOut)

export default Router