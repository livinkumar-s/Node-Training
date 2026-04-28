
let students = [
    { id: 1, name: "John", age: 20 },
    { id: 2, name: "Jane", age: 22 },
    { id: 3, name: "Doe", age: 21 },
    { id: 4, name: "Smith", age: 23 },
    { id: 5, name: "Emily", age: 20 },
    { id: 6, name: "Michael", age: 22 },
    { id: 7, name: "Sarah", age: 21 },
    { id: 8, name: "David", age: 23 },
    { id: 9, name: "Anna", age: 20 },
    { id: 10, name: "James", age: 22 }
]

export const getAllStudent = (req, res) => {
    res.status(201).json({
        success: true,
        data: {
            students
        }
    })
}

export const getStudent = (req, res) => {
    const studentId = req.params.id
    const result = students.find((val, ind) => {
        return val.id == studentId
    })


    if (!result) {
        return res.status(400).json({
            success: false,
            message: "No record found"
        })
    }

    res.status(201).json({
        success: true,
        data: {
            studentData: result
        }
    })
}

export const addStudent = (req, res) => {

    console.log("Reeceived here");


    const { name, age } = req.body
    if (name && age) {
        students.push({
            id: students.length + 1,
            name, age
        })

        res.status(201).json({ success: true, message: "Added Successfully...!" })
    } else {
        res.status(400).json({
            success: false,
            message: "Something went wrong...!"
        })
    }
}

export const deletestudent = (req, res) => {
    const studentId = req.params.id
    students = students.filter((val, ind) => val.id != studentId)
    res.status(200).json({ success: true, message: "Deleted Successfully...!" })
}