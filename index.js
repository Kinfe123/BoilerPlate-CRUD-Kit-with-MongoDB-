import express from "express"
import bodyParser from "body-parser"
import usersRouters  from "./route/users.js"
const app = express()
const PORT = 5000

//middleware - tells us to use a bp for our application 
app.use(bodyParser.json())
app.use('/users' , usersRouters)

app.get("/" , (req , res)=>{
    res.send("this is a home page")
})

app.listen(PORT , ()=>{
    console.log("The server is running at " , PORT)
})