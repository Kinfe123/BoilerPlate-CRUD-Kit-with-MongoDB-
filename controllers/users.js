import {v4 as uuidv4 } from "uuid"

export const createUser = (req , res)=>{
    res.send(  `User has been added ${req.body.firstName}`)
    const singleUser = req.body 
    const userId = uuidv4()
    const userwithId  = {...singleUser, id :  uuidv4() }
    users.push(userwithId)

}
export const getUser = (req , res)=> {
    const idUrl = req.params
    const {id} = idUrl
    const foundUser = users.find((user)=> user.id === id)

    
    res.send(foundUser)
}
export const deleteUser = (req , res)=>{
    
    const deletedPopUp = users.filter(user => user.id === id)
    users = users.filter((user)=> user.id !== id)
    
    const {firstName} = deletedPopUp
    res.send(  `The users ${firstName} has deleted from database`)
}
export const patchUser = (req, res)=>{
  
    
    const {firstName , lastName , id} = req.body
    const user = users.find((user)=> user.id === id)
    if(firstName){
        user.firstName = firstName
    }if(lastName){
        user.lastName = lastName
    }if(age){
        user.age = age
    }
    res.send(  `User ${firstName} has been updated`)
   

}
