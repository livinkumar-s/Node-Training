const http = require("http")

const users = [
    {id:1,name:"John"},
    {id:2,name:"Jane"},
    {id:3,name:"Doe"},

]

const server=http.createServer(
    (req,res)=>{

        
        
        if(req.method=="GET" && req.url=="/users"){
            res.writeHead(201, {
                "content-type":"application/json"
            })
            res.end(JSON.stringify(users))
        }

        else if (req.method=="POST" && req.url=="/user"){
            
            
            let body="";

            req.on("data",(data)=>{
                body+=data

                users.push(JSON.parse(body))
                 res.writeHead(201,{
                    "content-type":"application/json"
                 })
                 res.end(JSON.stringify({message:"success"}))
            })

           
            
            
        }

    }
);

server.listen(3000,()=>{
    console.log("Listening...");
})