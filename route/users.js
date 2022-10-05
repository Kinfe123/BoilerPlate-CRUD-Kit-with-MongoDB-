import express from "express"
import {v4 as uuidv4 } from "uuid"
import { createUser , getUser , deleteUser , patchUser } from "../controllers/users.js"
const router = express.Router()

let users = [
    // {
    //     firstName: "John", 
    //     lastName:"Abebe",
    //     age:10,
    // },
    // {
    //     firstName: "Kebede", 
    //     lastName:"Jim",
    //     age:11,
    // }
]
//homepage for user page - by default it is / since we used it on the middleware of indexjs 
//all the router that are found in this starts from users because of our middleware
router.get('/' , (req , res)=>{
    res.send(users)
})

router.post('/' , createUser)
router.get('/:id' , getUser)
router.delete('/:id' , deleteUser)
router.patch('/:id' , patchUser)
export default router