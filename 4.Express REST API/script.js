import express from "express"

const users = [
    {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com"
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane.smith@example.com"
    },
    {
        id: 3,
        name: "Alice Johnson",
        email: "alice.johnson@example.com"
    }

]

const server = express()

server.use(express.json())

server.get("/users", (req, res) => {
    console.log("We Got Get Req");
    res.status(200).json({
        users
    })
})

server.post("/user", (req, res) => {
    const body = req.body
    console.log(body);
    users.push(
        {
            id: users.length + 1,
            name: body?.name,
            email: body?.email
        }
    )
    res.status(201).json({
        "success": true,
        "message": "User created Successfully",
        "data": {
            id: users.length + 1,
            name: body?.name,
            email: body?.email
        }

    })
})

server.listen(3333, () => {
    console.log("Server is listening");
})

