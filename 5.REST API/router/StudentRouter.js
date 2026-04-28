import express from "express"
import {getAllStudent,getStudent, deletestudent, addStudent} from "../controller/StudentController.js"

const Router = express.Router()


// Get all student 
Router.get("/allstudent", getAllStudent)

//GET /student/33
Router.get("/student/:id", getStudent)

// creating 

Router.post("/student", addStudent)


Router.delete("/student/:id",deletestudent)

export default Router;