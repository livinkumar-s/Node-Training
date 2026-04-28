import exp from "express"
import StudentRouter from "./router/StudentRouter.js"


const app = exp()
app.use(exp.json())
app.use(exp.urlencoded({extended:true}))

app.use("/student", StudentRouter)
// app.use("/teacher", TeacherRouter)

app.listen(3333, () => { console.log("Listening on 3333") })